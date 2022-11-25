import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spacer } from './index';
import { StorybookDiv } from './styles';

export default {
    title: 'Components/Spacer',
    component: Spacer,
    decorators: [
        (Story) => (
            <StorybookDiv>
                <Story />
            </StorybookDiv>
        ),
    ],
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => <Spacer {...args} />;

export const Default = Template.bind({});
Default.args = {};