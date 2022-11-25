import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PathPage } from './index';

export default {
    title: 'Components/Path Page',
    component: PathPage,
} as ComponentMeta<typeof PathPage>;

const Template: ComponentStory<typeof PathPage> = (args) => <PathPage {...args} />;

export const Default = Template.bind({});
Default.args = {
    paths: [
        'Category',
        'Subcategory',
    ]
};