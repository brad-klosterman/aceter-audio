// import Power from '@images/power.svg';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { DKnob } from '../';

const Container = styled.div(
    () => `       
        height: auto;
        background: transparent;
        box-shadow: 0px 1px 5px 3px #1f1e1e80;
        border-radius: 5px;
        margin: 0 auto;
        text-align: center;
        padding: 15px;
        grid-column: 1/4;
    `,
);

const Grid = styled.div(
    () => `       
        color: white;
        font-size: 14px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        div:nth-child(1){
            animation-delay: 0s;
        }
        div:nth-child(2){
            animation-delay: .2s;
        }
        div:nth-child(3){
            animation-delay: .4s;
        }
        div:nth-child(4){
            animation-delay: .6s;
        }
        div:nth-child(5){
            animation-delay: .8s;
        }
        div:nth-child(6){
            animation-delay: 1s;
        }
        div:nth-child(7){
            animation-delay: 1.2s;
        }
    `,
);

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

const Selections = styled.div`
    box-shadow: 0 0 4px 0px #c833ff87;
    border-radius: 3px;

    height: 50px;
    width: auto;
    text-align: center;
    margin: 5px;
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 20px;
    animation: ${css`
        ${colorShift} 60s ease infinite
    `};
    transition: animation 2s;
`;

const Effects: React.FC = () => {
    const [mix, setMix] = React.useState(20);
    const [mix2, setMix2] = React.useState(40);
    // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log(e.currentTarget.value);
    //     const audio = new Audio(`assets/audio/piano_${e.currentTarget.value}.mp3`);
    //     audio.play();
    // };

    return (
        <Container>
            <Grid>
                <Selections>
                    <DKnob
                        value={mix}
                        onValueChange={(value) => setMix(value)}
                        diameter={40}
                        min={0}
                        max={100}
                        step={5}
                    />
                </Selections>
                <Selections>
                    <DKnob
                        value={mix2}
                        onValueChange={(value) => setMix2(value)}
                        diameter={40}
                        min={0}
                        max={100}
                        step={5}
                    />
                </Selections>
                <Selections></Selections>
                <Selections></Selections>
                <Selections></Selections>
                <Selections></Selections>
                <Selections></Selections>
            </Grid>
        </Container>
    );
};

export default Effects;
