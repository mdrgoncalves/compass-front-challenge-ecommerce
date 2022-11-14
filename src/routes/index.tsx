import { Routes as Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Category } from '../pages/Category';
import { Product } from '../pages/Product';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route element={<Home />} path="/" />
            <Route element={<Category />} path="/category" />
            <Route element={<Product />} path="/product" />
        </Switch>
    )
}