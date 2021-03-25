import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Button from './Button';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },

        incidentId: '123456',
    },
};

// We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
    <Button {...args}>{args.text}</Button>
);

export const Default = Template.bind({});
Default.args = {
    /* The args you need here will depend on your component */
    size: 'large',
    color: 'primary',
    text: 'BUTTON',
};
