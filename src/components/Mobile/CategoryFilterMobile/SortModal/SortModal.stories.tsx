import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SortModal } from './index';

export default {
    title: 'Components/Modals',
    component: SortModal,
} as ComponentMeta<typeof SortModal>;

const Template: ComponentStory<typeof SortModal> = (args) => <SortModal {...args} />;

export const Sort = Template.bind({});
Sort.args = {};