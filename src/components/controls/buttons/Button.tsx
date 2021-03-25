import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface ButtonProps {
    children?: React.ReactChild;
    className?: string;
    radius?: number;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
    onClick?: () => void,
}

const Button: React.FC<ButtonProps> = (props) => (
    <button>{props.children}</button>
);




const sizes = {
    small: css`
        padding: 5px 20px;
        font-size: 12px;
    `,
    medium: css`
        padding: 10px 30px;
        font-size: 14px;
    `,
    large: css`
        padding: 15px 40px;
        font-size: 18px;
    `,
};

const colors = {
    primary: css`
        border: 2px solid;
        border-color: rgba(85, 154, 211, 1);
        background: transparent;
        color: red
    `,
    secondary: css`
        border: 1px solid palevioletred;
        background: palevioletred;
        color: green;
    `,
};

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

const StyledButton = styled(Button)`
    ${({ size = 'small' }) => sizes[size]};
    ${({ color = 'primary' }) => colors[color]};
    outline: none;
    border-radius: ${({ radius = 0 }) => radius}px;
    animation: ${css`
        ${colorShift} 60s ease infinite
    `};
    transition: animation 2s;
`;

export default StyledButton;
