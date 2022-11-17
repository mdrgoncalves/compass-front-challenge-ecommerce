import { Routes as Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Category } from '../pages/Category';
import { Product } from '../pages/Product';
import { HeaderDesktop } from '../components/Desktop/HeaderDesktop';

import ViewportProvider from '../context/viewportContext';

export const Routes: React.FC = () => {
    return (
        <>
        <ViewportProvider>
            <HeaderDesktop />
            <Switch>
                <Route element={<Home />} path="/" />
                <Route element={<Product />} path="/product" />
                <Route element={<Category />} path="/:category" />
                <Route element={<Product />} path="/product/:productId" />
            </Switch>
        </ViewportProvider>
        </>
    )
}