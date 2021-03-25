import React from 'react';
import { KnobProps } from 'react-dial-knob';

import { BasicTheme } from './Basic';
import { DonutTheme } from './Donut';

export default interface SkinProps<T extends DonutTheme | BasicTheme | unknown>
    extends KnobProps {
    style?: React.CSSProperties;
    theme?: T;
}
