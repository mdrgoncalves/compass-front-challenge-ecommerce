import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasketModal } from './index';

export default {
    title: 'Components/Modals',
    component: BasketModal,
} as ComponentMeta<typeof BasketModal>;

const Template: ComponentStory<typeof BasketModal> = () => <BasketModal onClose={() => console.log('test')}/>

export const Basket = Template.bind({});
Basket.args = {};
