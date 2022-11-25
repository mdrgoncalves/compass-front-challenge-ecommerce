import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductTabs } from './index';

export default {
    title: 'Components/Tabs',
    component: ProductTabs,
} as ComponentMeta<typeof ProductTabs>;

const Template: ComponentStory<typeof ProductTabs> = (args) => <ProductTabs {...args} />;

export const Desktop = Template.bind({});
Desktop .args = {}