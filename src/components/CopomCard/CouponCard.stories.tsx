import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CopomCard } from './index';

export default {
    title: 'Components/Coupon Card',
    component: CopomCard,
} as ComponentMeta<typeof CopomCard>;

const Template: ComponentStory<typeof CopomCard> = () => <CopomCard />

export const Default = Template.bind({});
Default.args = {};
