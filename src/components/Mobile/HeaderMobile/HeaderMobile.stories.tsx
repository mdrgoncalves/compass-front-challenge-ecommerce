import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderMobile } from './index';
import { StorybookDiv } from './styles';

export default {
    title: 'Components/Headers',
    component: HeaderMobile,
    decorators: [
        (Story) => (
            <StorybookDiv>
                <Story />
            </StorybookDiv>
        ),
    ],

} as ComponentMeta<typeof HeaderMobile>;


const Template: ComponentStory<typeof HeaderMobile> = () => <HeaderMobile />

export const Mobile = Template.bind({});
Mobile.args = {};


