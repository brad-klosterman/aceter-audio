import React, { useCallback, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import * as Tone from 'tone';

import { useEventListener } from '../../auxiliary';
import SampleLibrary from '../instruments/sampler';
import { notes } from './auxillary';
import Key from './Key';

const colorShift = keyframes`
    0% {
        box-shadow: 0 0 4px 0px #ff333387;
        border-color: #ff333387;
    }
    20% {
        box-shadow: 0 0 4px 0px #c833ff87;
        border-color: #c833ff87;
    }
    40% {
        box-shadow: 0 0 4px 0px #3b33ff87;
        border-color: #3b33ff87;
    }
    60% {
        box-shadow: 0 0 4px 0px #33f1ff87;
        border-color: #33f1ff87;
    }
    80% {
        box-shadow: 0 0 4px 0px #ffce3387;
        border-color: #ffce3387;
    }
    100% {
        box-shadow: 0 0 4px 0px #ff703387;
        border-color: #ff703387;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`;

const Source = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 4px 0px #c833ff87;
    border-radius: 3px;
    border: 1px solid;
    padding: 5px 20px;
    width: 200px;
    margin-bottom: 20px;
    animation: ${css`
        ${colorShift} 60s ease infinite
    `};
    animation-delay: 0.6s;
    transition: animation 2s;
`;

const Arrow = styled.div`
    cursor: pointer;
    font-size: 20px;
`;

const instruments = [
    'piano',
    'bass-electric',
    'bassoon',
    'cello',
    'clarinet',
    'contrabass',
    'flute',
    'french-horn',
    'guitar-acoustic',
    'guitar-electric',
    'guitar-nylon',
    'harmonium',
    'harp',
    'organ',
    'saxophone',
    'trombone',
    'trumpet',
    'tuba',
    'violin',
    'xylophone',
];

const samples = SampleLibrary.load({
    instruments,
    baseUrl: '/assets/audio/samples/',
});

const AceterSynth = new Tone.Synth({
    oscillator: {
        type: 'fmsawtooth',
        modulationType: 'sawtooth',
        modulationIndex: 3,
        harmonicity: 3.4,
    },
    envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1,
    },
}).toDestination();
const synth = new Tone.PolySynth(AceterSynth.get());

synth.set({
    envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 1,
        release: 0.8,
    },
});
synth.toDestination();

const KeyMap: {
    [key: string]: string;
} = {
    KeyA: 'C3',
    KeyS: 'D3',
    KeyD: 'E3',
    KeyF: 'F3',
    KeyG: 'G3',
    KeyH: 'A3',
    KeyJ: 'B3',
    KeyK: 'C4',
    KeyL: 'D4',
    Semicolon: 'E4',
    Quote: 'F4',
    KeyW: 'C3#',
    KeyE: 'D3#',
    KeyT: 'F3#',
    KeyY: 'G3#',
    KeyU: 'A3#',
    KeyO: 'C4#',
    KeyP: 'D4#',
};

const Keyboard: React.FC = () => {
    const [activeNotes, setActiveNotes] = useState<string[]>([]);
    const [index, setIndex] = useState<number>(9);
    const [current, setCurrent] = useState(samples[instruments[index]]);

    useEffect(() => {
        for (const property in samples) {
            if (samples.hasOwnProperty(property)) {
                samples[property].release = 0.5;
                samples[property].toDestination();
            }
        }
    }, []);

    useEffect(() => {
        setCurrent(samples[instruments[index]]);
    }, [index]);

    const changeInstrument = (value: number) => {
        setIndex(value);
    };
    const keyPress = (note: string) => {
        
        current.triggerAttack([`${note}`]);
        setActiveNotes((activeNotes) => [...activeNotes, note]);
    };

    const keyRelease = (note: string) => {
        current.triggerRelease([`${note}`]);

        setActiveNotes((activeNotes) => {
            const newOutput = [];

            for (let i = 0; i < activeNotes.length; i++) {
                if (activeNotes[i] !== note) {
                    newOutput.push(activeNotes[i]);
                }
            }

            return newOutput;
        });
    };

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            !event.repeat && KeyMap[event.code] && keyPress(KeyMap[event.code]);
        });

        document.addEventListener('keyup', (event) => {
            KeyMap[event.code] && keyRelease(KeyMap[event.code]);
        });
    }, []);

    const clickHandler = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            // console.log(e.currentTarget.value);
        },
        [],
    );

    return (
        <Wrapper>
            <Source>
                <Arrow onClick={() => changeInstrument(index - 1)}>&#60;</Arrow>
                {instruments[index]}
                <Arrow onClick={() => changeInstrument(index + 1)}>&#62;</Arrow>
            </Source>
            <div>
                {notes.map(({ note, color }) => (
                    <Key
                        key={note}
                        color={color}
                        activated={activeNotes.includes(note)}
                        onClick={clickHandler}
                    />
                ))}
            </div>
        </Wrapper>
    );
};

export default Keyboard;

/*


var synth1 = new Tone.PolySynth(5, Tone.Synth, {
  oscillator: {
    type: 'custom',
    partials: [0.2, 0.2, 0.01]
  },
  'envelope': {
    'attack': 0.5,
    'decay': 0.5,
    'sustain': 0.5,
    'release': 0.5
  }
})

var synth2 = SampleLibrary.load({
  instruments: 'piano',
  baseUrl: 'https://nbrosowsky.github.io/tonejs-instruments/samples/'
})


// const feedbackDelay = new Tone.PingPongDelay({
//     "delayTime": "8n",
//     "feedback": 0.6,
//     "wet": 0.5
// }).toMaster();
// const distortion = new Tone.Distortion({
//     "delayTime": "8n",
//     "feedback": 0.2,
//     "wet": 0.3
// }).toMaster();

// const synth2 = new Tone.PolySynth(3, Tone.Synth, {
//     "oscillator": {
//         "type": "pulse", // can be pwm, sine, sawtooth, pulse, triangle
//         "count": 3,
//         "spread": 30
//     },
//     "envelope": {
//         "attack": 0.01,
//         "decay": 0.5,
//         "sustain": 0.3,
//         "release": 0.2,
//         "attackCurve": "linear"
//     },
// }).connect(distortion).connect(feedbackDelay);

// synth.set("detune", -600);

*/
