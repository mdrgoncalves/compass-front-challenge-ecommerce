import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CollapseButton } from './index';

export default {
    title: 'Components/Buttons',
    component: CollapseButton,
} as ComponentMeta<typeof CollapseButton>;

const Template: ComponentStory<typeof CollapseButton> = (args) => <CollapseButton {...args} />;

export const Collapse = Template.bind({});
Collapse.args = {
    label: 'Collapse'
};
