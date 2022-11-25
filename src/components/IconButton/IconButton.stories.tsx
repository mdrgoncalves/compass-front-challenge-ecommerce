import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './index';

export default {
    title: 'Components/Buttons',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Icon = Template.bind({});
Icon.args = {
    iconSrc: '/assets/img/icons/left-arrow-icon.png',
    alt: 'Icon',
};