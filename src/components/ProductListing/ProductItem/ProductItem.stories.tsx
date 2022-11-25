import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductItem } from './index';

export default {
    title: 'Components/Products Cards',
    component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

export const PaginationItem = Template.bind({});
PaginationItem.args = {
    category: 'category',
    imgSrc: '/assets/img/products/boujee-bag.png',
    id: 1,
    title: 'Product Title',
    desc: 'Product Description',
    price: '$100,00'
};