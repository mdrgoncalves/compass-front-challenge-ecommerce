import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MobileNav } from './index';
import { StorybookDiv } from './styles';

export default {
    title: 'Components/Mobile Navigation',
    component: MobileNav,
    decorators: [
        (Story) => (
            <StorybookDiv>
                <Story />
            </StorybookDiv>
        ),
    ],
} as ComponentMeta<typeof MobileNav>;

const Template: ComponentStory<typeof MobileNav> = () => <MobileNav />

export const Home = Template.bind({});
Home.args = {};
