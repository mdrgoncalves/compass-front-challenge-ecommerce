import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilterCollapse } from './index';

export default {
    title: 'Components/Collapsers',
    component: FilterCollapse,
} as ComponentMeta<typeof FilterCollapse>;

const Template: ComponentStory<typeof FilterCollapse> = (args) => <FilterCollapse {...args}/>
export const Filter = Template.bind({});
Filter.args = {
    title: 'Filter Title',
    children: <div>Filter Content</div>
};
