import React from 'react';
import styled from 'styled-components';

export interface IKey {
    color: string;
    activated: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IActive {
    activated: boolean;
}

const Black = styled.button<IActive>(
    ({ activated }) => `       
        width: 40px;
        height: 130px;
        background: ${activated ? '#301934' : 'black'};
        border: solid black 1px;
        position: absolute;
        margin-left: -20px;
        :active {
            background: #333;
        }
        :focus {
            outline: none;
        }
    `,
);

const White = styled.button<IActive>(
    ({ activated }) => `       
        width: 60px;
        height: 200px;
        background: ${activated ? '#301934' : 'white'};
        border: solid #301934 1px;
        box-shadow: 2px 5px;
        box-sizing: border-box;
        :active {
            background: #eee;
        }
        :focus {
            outline: none;
        }
    `,
);

const Note: React.FC<IKey> = ({ color, activated, onClick }) => {
    return color === 'white' ? (
        <White activated={activated} onClick={onClick} />
    ) : (
        <Black activated={activated} onClick={onClick} />
    );
};

export default Note;
