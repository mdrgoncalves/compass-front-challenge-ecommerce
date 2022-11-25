import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FooterCollapse } from './index';

export default {
    title: 'Components/Footer',
    component: FooterCollapse,
    decorators: [
        (Story) => (
            <Story />
        ),
    ],
} as ComponentMeta<typeof FooterCollapse>;

const Template: ComponentStory<typeof FooterCollapse> = () => <FooterCollapse />

export const Mobile = Template.bind({});
Mobile.args = {};
