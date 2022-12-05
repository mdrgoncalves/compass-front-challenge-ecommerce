import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductBagDisplay } from './index';

export default {
    title: 'Components/Products Cards',
    component: ProductBagDisplay,
} as ComponentMeta<typeof ProductBagDisplay>;

const Template: ComponentStory<typeof ProductBagDisplay> = (args) => <ProductBagDisplay {...args}/>

export const BagCard = Template.bind({});
BagCard.args = {
    imgSrc: 'https://via.placeholder.com/150',
    title: 'Product Title',
    description: 'Product Description',
    price: 100.00,
    onClick: () => console.log('test')
};