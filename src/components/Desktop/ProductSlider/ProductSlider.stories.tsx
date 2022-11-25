import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductSlider } from './index';
import { StorybookDiv } from './styles';

export default {
    title: 'Components/Carousels & Sliders',
    component: ProductSlider,
    decorators: [
        (Story) => (
            <StorybookDiv>
                <Story />
            </StorybookDiv>
        ),
    ],
} as ComponentMeta<typeof ProductSlider>;

const Template: ComponentStory<typeof ProductSlider> = (args) => <ProductSlider {...args} />;

export const ImageSlider = Template.bind({});
ImageSlider.args = {};