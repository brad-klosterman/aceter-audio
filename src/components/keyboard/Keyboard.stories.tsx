import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Keyboard from './Keyboard';

export default {
    title: 'Molecules/Keyboard',
    component: Keyboard,
    argTypes: {},
};

const Template: Story<ComponentProps<typeof Keyboard>> = (args) => (
    <Keyboard {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
