import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';

import { BasicTheme } from '../../Basic';
import { DonutTheme } from '../../Donut';
import SkinProps from '../../SkinProps';
import useNumberState from './useNumberState';

export interface Story {
    (): JSX.Element;
    story?: {
        parameters?: {
            notes?: { docs: string };
            options?: {
                showPanel?: boolean;
            };
        };
    };
}

interface DefaultValues {
    min?: number;
    max?: number;
    diameter?: number;
    step?: number;
    value?: number;
    spaceMaxFromZero?: boolean;
}

const wrapSkinComponent = (
    SkinComponent: React.FunctionComponent<
        SkinProps<DonutTheme | BasicTheme | unknown>
    >,
    defaults: DefaultValues = {},
    themeProvider?: () => DonutTheme | BasicTheme,
): Story => (): JSX.Element => {
    const defaultVals = {
        min: 0,
        max: 120,
        step: 1,
        diameter: 180,
        jumpLimit: 1,
        spaceMaxFromZero: true,
        ...defaults,
    };
    const diameter = number('Diameter', defaultVals.diameter, {
        range: true,
        min: 20,
        max: 400,
        step: 1,
    });
    const min = number('Min', defaultVals.min, {});
    const max = number('Max', defaultVals.max, {});
    const step = number('Step', defaultVals.step, {
        range: true,
        min: Math.max(min, 1),
        max: max,
        step: 1,
    });
    const jumpLimit = number('Jump Limit', defaultVals.jumpLimit, {
        range: true,
        min: 0,
        max: 1,
        step: 0.1,
    });
    const valueOptions = {
        range: true,
        min: min,
        max: max,
        step: step,
    };
    const [value, setValue] = useNumberState(
        'Value',
        defaultVals.value || min,
        valueOptions,
    );
    const spaceMaxFromZero = boolean(
        'SpaceMaxFromZero',
        defaultVals.spaceMaxFromZero,
    );

    const theme = themeProvider && themeProvider();

    return (
        <SkinComponent
            diameter={diameter}
            min={min}
            max={max}
            step={step}
            value={value}
            jumpLimit={jumpLimit}
            spaceMaxFromZero={spaceMaxFromZero}
            onValueChange={setValue}
            style={{
                position: 'absolute',
                top: `calc(50% - ${diameter / 2}px)`,
                left: `calc(50% - ${diameter / 2}px)`,
            }}
            theme={theme}
            ariaLabelledBy="knobLabel"
        ></SkinComponent>
    );
};

export default wrapSkinComponent;
