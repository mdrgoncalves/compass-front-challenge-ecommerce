import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
    title: 'Components/Buttons',
    component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;
export const Primary = Template.bind({});
Primary.args = {
    color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary'
};

export const Remove = Template.bind({});
Remove.args = {
    color: 'remove'
};

