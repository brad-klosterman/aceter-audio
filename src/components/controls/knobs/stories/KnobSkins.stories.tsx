import { withKnobs } from '@storybook/addon-knobs';

import { skinBasic as Basic } from './BasicStory';
import { skinDonut as Donut } from './DonutStory';

export default {
    title: 'Atoms/Knobs',
    decorators: [withKnobs],
};

export { Donut, Basic };
