import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchInput } from './index';

export default {
    title: 'Components/Inputs',
    component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const Search = Template.bind({});
Search.args = {
    placeholder: 'Search',
};
