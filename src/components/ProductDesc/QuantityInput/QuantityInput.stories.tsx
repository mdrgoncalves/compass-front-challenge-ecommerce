import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuantityInput } from './index';

export default {
    title: 'Components/Inputs/Quantity Input',
    component: QuantityInput,
} as ComponentMeta<typeof QuantityInput>;

const Template: ComponentStory<typeof QuantityInput> = (args) => <QuantityInput {...args} />;

export const Quantity = Template.bind({});
Quantity.args = {};

export const QuantityWithLabel = Template.bind({});
QuantityWithLabel.args = {
    label: 'Quantity'
};