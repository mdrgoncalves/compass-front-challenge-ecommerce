import { Routes as Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Category } from '../pages/Category';
import { Product } from '../pages/Product';
import { HeaderDesktop } from '../components/Desktop/HeaderDesktop';

import ViewportProvider from '../context/viewportContext';
import { FooterDesktop } from '../components/Desktop/FooterDesktop';
import BagProvider from '../context/BagContext';

export const Routes: React.FC = () => {

    return (
        <BagProvider>
            <ViewportProvider>
                <HeaderDesktop />
                <Switch>
                    <Route element={<Home />} path="/" />
                    <Route element={<Category />} path="/category/:category" />
                    <Route element={<Product />} path="/category/:category/:productId" />
                </Switch>
                <FooterDesktop />
            </ViewportProvider>
        </BagProvider>
    )
}