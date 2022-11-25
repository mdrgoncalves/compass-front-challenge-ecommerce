import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderDesktop } from './index';

export default {
    title: 'Components/Headers',
    component: HeaderDesktop,
} as ComponentMeta<typeof HeaderDesktop>;

const Template: ComponentStory<typeof HeaderDesktop> = () => <HeaderDesktop />

export const Web = Template.bind({});
Web.args = {};