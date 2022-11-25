import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from './index';

export default {
    title: 'Components/Headings',
    component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Heading 1',
    invertColor: false,
};
