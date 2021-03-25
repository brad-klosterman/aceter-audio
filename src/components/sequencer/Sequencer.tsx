import { GraphQLResult } from '@aws-amplify/api';
import Power from '@images/power2.svg';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Tone from 'tone';

import { callGraphQL } from '../../api';
import {
    OnUpdateTrackIDSubscription,
    UpdateTrackInput,
    UpdateTrackMutation,
} from '../../api/API';
import { updateTrack } from '../../api/graphql/mutations';
import { onUpdateTrackID } from '../../api/graphql/subscriptions';
import {
    clapPart,
    hiHatPart,
    kickPart,
    openHiHatPart,
    snarePart,
    subPart,
} from '../instruments/instruments';
import Led from './Led';

const config = {
    channels: ['kick', 'sub', 'snare', 'clap', 'hiHat', 'openHiHat'],
};

type IChannel = {
    [key: string]: boolean[];
};

type IInstrument = {
    [key: string]: any;
};

interface IFrame {
    width: number;
    height: number;
}

interface IState {
    playing: boolean;
    beats: number;
    bpm: number;
}

const initialMatrix = config.channels.reduce(
    (accumulator, channel: string) => ({
        ...accumulator,
        [channel]: Array(64).fill(false),
    }),
    {}, // todo function that updates when length changes
);

const Frame = memo(
    styled.div<IFrame>(
        ({ width, height }) => `
            display: grid;
            grid-template-columns: repeat(${width}, 1fr);
            grid-template-rows: repeat(${height}, 1fr);
            width: 90%;
            margin-bottom: 20px;
    `,
    ),
);

const Controls = styled.div(
    () => `       
        width: 100%;
        display: flex;
        align-item: flex-end;
        justify-content: center;
    `,
);

interface ITrack {
    [key: string]: number | string | boolean | undefined;
    id?: string | undefined;
}

function mapUpdateTrackMutation(
    updateTrackMutation: GraphQLResult<UpdateTrackMutation>,
): ITrack {
    const track = updateTrackMutation.data?.updateTrack;
    return (
        ({
            id: track?.id,
        } as ITrack) || undefined
    );
}

interface SubscriptionValue<T> {
    value: { data: T };
}
function subscribeGraphQL<T>(
    subscription: any,
    variables: any,
    callback: (value: T) => void,
) {
    //@ts-ignore
    return API.graphql(graphqlOperation(subscription, variables)).subscribe({
        next: (response: SubscriptionValue<T>) => {
            callback(response.value.data);
        },
    });
}

async function handleUpdateTrack(input: UpdateTrackInput): Promise<ITrack> {
    try {
        const response = await callGraphQL<UpdateTrackMutation>(updateTrack, {
            input: input,
        });
        const updatedTrack = mapUpdateTrackMutation(response);
        return updatedTrack;
    } catch (error) {
        throw error;
    }
}

interface IProps {
    track: ITrack;
}

const Sequencer = ({ track }: IProps) => {
    const [state, setState] = useState<IState>({
        playing: false,
        beats: 64,
        bpm: 120,
    });
    const [stepMatrix, setStepMatrix] = useState<IChannel>(initialMatrix);

    const [step, setStep] = useState<number>(-1);

    const [instruments, setInstruments] = useState<IInstrument>({
        kick: {
            event: kickPart,
        },
        sub: {
            event: subPart,
        },
        clap: {
            event: clapPart,
        },
        snare: {
            event: snarePart,
        },
        hiHat: {
            event: hiHatPart,
        },
        openHiHat: {
            event: openHiHatPart,
        },
    });

    useEffect(() => {
        if (track.id) {
            const subscription = subscribeGraphQL(
                onUpdateTrackID,
                {
                    id: track.id,
                },
                ({ onUpdateTrackID }) => {
                    setStepMatrix(onUpdateTrackID.sequencer);
                },
            );

            return () => subscription.unsubscribe();
        }
        return undefined;
    }, [track]);

    useEffect(() => {
        Tone.Transport.bpm.value = state.bpm;
    }, [state.bpm]);

    useEffect(() => {
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = '0:0:0';
        Tone.Transport.loopEnd = `0:${state.beats / 4}:0`;

        Tone.Transport.scheduleRepeat((time) => {
            setStep((step) => {
                return step > state.beats - 2 ? 0 : step + 1;
            });
        }, '16n');

        Tone.Transport.on('stop', () => {
            setTimeout(() => setStep(-1), 100);
        });
    }, []);

    useEffect(() => {
        if (state.playing) {
            Tone.Transport.start('+0.0');
        } else {
            Tone.Transport.stop();
        }
        // return () => Tone.Transport.stop();
    }, [state.playing]);

    useEffect(() => {
        // tslint:disable-next-line
        if (track.sequencer) setStepMatrix(track.sequencer || initialMatrix);
    }, [track]);

    const switchBeat = ({
        channel,
        xAxis,
        beatOn,
    }: {
        channel: string;
        xAxis: number;
        beatOn: boolean;
    }) => {
        const bars: number = xAxis / 16;
        const beats: number = bars * 4;
        const positionInBar: number = beats >= 4 ? beats - 4 : beats;
        const steps: number = (beats - Math.floor(beats)) / 0.25;

        const time = `${Math.floor(bars)}:${Math.floor(
            positionInBar,
        )}:${steps}`;

        beatOn
            ? instruments[channel].event.add({
                  time,
              })
            : instruments[channel].event.remove(time);
    };

    const selectLed = useCallback(
        ({ channel, xAxis }: { channel: string; xAxis: number }) => {
            const newChannel = stepMatrix[channel];
            newChannel[xAxis] = !newChannel[xAxis];
            setStepMatrix((matrix) => ({
                ...matrix,
                [channel]: newChannel,
            }));

            switchBeat({
                channel,
                xAxis,
                beatOn: newChannel[xAxis],
            });

            handleUpdateTrack({
                id: track.id || '0',
                sequencer: stepMatrix,
            });
        },

        [track],
    );

    return (
        <>
            <Frame width={state.beats} height={config.channels.length}>
                {config.channels.map((channel, yAxis: number) =>
                    stepMatrix[channel].map(
                        (activated: boolean, xAxis: number) => (
                            <Led
                                key={`${channel}${xAxis}`}
                                activated={Boolean(activated)}
                                current={Boolean(step === xAxis)}
                                yAxis={yAxis}
                                xAxis={xAxis}
                                onClick={() =>
                                    selectLed({
                                        channel,
                                        xAxis,
                                    })
                                }
                            />
                        ),
                    ),
                )}
            </Frame>
            <Controls>
                <Power
                    style={{ fontSize: '2em', marginLeft: '0.5em' }}
                    fill={state.playing ? '#EED660' : '#47474f'}
                    onClick={() => {
                        Tone.start();
                        setState((state) => ({
                            ...state,
                            playing: !state.playing,
                        }));
                    }}
                />
            </Controls>
        </>
    );
};

export default Sequencer;

/*

const kickDrum = new Tone.MembraneSynth({
        volume: 6,
    }).toMaster();

    const kicks = [
        { time: '0:0:0' },
        { time: '0:1:0' },
        { time: '0:2:0' },
        { time: '0:3:0' },
        { time: '0:4:0' },
        { time: '0:5:0' }
    ];

    const kickPart = new Tone.Part((time) => {
        kickDrum.triggerAttackRelease('C1', '8n', time);
    }, kicks).start(0);

    */
