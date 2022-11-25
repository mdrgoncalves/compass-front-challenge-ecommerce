import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductMobileButtons } from './index';
import { StorybookDiv } from './styles';

export default {
    title: 'Components/Mobile Navigation',
    component: ProductMobileButtons,
    decorators: [
        (Story) => (
            <StorybookDiv>
                <Story />
            </StorybookDiv>
        ),
    ],
} as ComponentMeta<typeof ProductMobileButtons>;

const Template: ComponentStory<typeof ProductMobileButtons> = (args) => <ProductMobileButtons {...args} />;

export const Product = Template.bind({});
Product.args = {};