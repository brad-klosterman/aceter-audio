import { memo } from 'react';
import styled from 'styled-components';

interface ILed {
    activated: boolean;
    current: boolean;
    xAxis: number;
    yAxis: number;
}
const ledBackground = (param: ILed): string => {
    switch (true) {
        case param.activated && param.current:
            return '#EED660';
        case param.activated && !param.current:
            return '#EED660';
        case !param.activated && param.current:
            return '#eef';
        default:
            return param.xAxis % 4 === 0 ? '#47474f' : '#35353b';
    }
};

const Led = memo(
    styled.div<ILed>(
        ({ activated, current, xAxis, yAxis }) => `
        background: ${ledBackground({ activated, current, xAxis, yAxis })};
        box-shadow: ${
            activated
                ? '0px 0px 10px rgba(238, 214, 96, .5)'
                : '0px 1px 3px 0px rgba(0, 0, 0, 0.3)'
        };
        height: 30px;
        grid-column: ${xAxis + 1};
        grid-row: ${yAxis + 1};
        margin: 3px;
        border-radius: 2px;
        cursor: pointer;
        // transition: all 0.25s ease-out 0s;
        &:hover {
            background: #787885 !important;
        }
    `,
    ),
);

export default Led;
