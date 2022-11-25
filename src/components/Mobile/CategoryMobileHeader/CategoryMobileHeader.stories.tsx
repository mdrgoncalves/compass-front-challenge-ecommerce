import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoryMobileHeader } from './index';

export default {
    title: 'Components/Headers',
    component: CategoryMobileHeader,
} as ComponentMeta<typeof CategoryMobileHeader>;

const Template: ComponentStory<typeof CategoryMobileHeader> = (args) => <CategoryMobileHeader {...args} />;

export const MobileCategory = Template.bind({});
MobileCategory.args = {
    totalProducts: 10
};

