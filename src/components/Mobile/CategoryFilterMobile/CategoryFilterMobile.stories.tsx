import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoryFilterMobile } from './index';
import { StorybookDiv } from './styles';

export default {
    title: 'Components/Mobile Navigation',
    component: CategoryFilterMobile,
    decorators: [
        (Story) => (
            <StorybookDiv>
                <Story />
            </StorybookDiv>
        ),
    ],
} as ComponentMeta<typeof CategoryFilterMobile>;

const Template: ComponentStory<typeof CategoryFilterMobile> = (args) => <CategoryFilterMobile {...args} />;

export const Filter = Template.bind({});
Filter.args = {};

