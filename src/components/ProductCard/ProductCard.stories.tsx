import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from './index';

export default {
    title: 'Components/Products Cards',
    component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;
export const Product = Template.bind({});
Product.args = {
    category: 'category',
    imgSrc: '/assets/img/products/boujee-bag.png',
    id: '1',
    title: 'Product Title',
    desc: 'Product Description',
    price: 100.00
};
