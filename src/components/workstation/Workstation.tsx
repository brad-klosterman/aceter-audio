import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Tone from 'tone';

import { callGraphQL } from '../../api';
import { GetTrackQuery } from '../../api/API';
import { getTrack } from '../../api/graphql/queries';
import { Effects, Keyboard } from '../';
import { AppContext, Types } from '../main/State';
import Sequencer from '../sequencer/Sequencer';

const Container = styled.div(
    () => `       
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        background: rgba(30, 30, 30, 1);
    `,
);

const Loader = styled.div(
    () => `       
        padding: 20px;
    `,
);

interface ITrack {
    id: string;
    createdAt: string;
    sequencer: {
        kick: boolean[]
        sub: boolean[]
        snare: boolean[]
        clap: boolean[]
        hiHat: boolean[]
        openHiHat: boolean[]
      }
}

function mapGetTrackQuery(getTrackQuery: GraphQLResult<GetTrackQuery>): ITrack {
    const track = getTrackQuery.data?.getTrack;
    return (
        ({
            id: track?.id,
            createdAt: track?.createdAt,
            sequencer: track?.sequencer,
        } as ITrack) || undefined
    );
}

const Workstation = (): React.ReactElement => {
    const { state, dispatch } = useContext(AppContext);
    const [loaded, setLoaded] = useState({})

    useEffect(() => {
        async function loadTrack() {
            try {
                const response = await callGraphQL<GetTrackQuery>(getTrack, {
                    id: state.track.trackID,
                });
                const track = mapGetTrackQuery(response);
                console.log('track', track);
                setLoaded(track)
                return track;
            } catch (error) {
                throw error;
            }
        }
        loadTrack();
    }, []);

    if (!state.track.trackID) return <Loader>LOADING</Loader>;

    return (
        <Container>
            { loaded && <Sequencer track={loaded} /> }
            <Effects />
            <Keyboard />
        </Container>
    );
};

export default Workstation;
