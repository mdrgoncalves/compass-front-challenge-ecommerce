import { Routes as Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Category } from '../pages/Category';
import { Product } from '../pages/Product';
import { HeaderDesktop } from '../components/Desktop/HeaderDesktop';

import ViewportProvider from '../context/viewportContext';
import ProductProvider from '../context/ProductContext';
import BagProvider from '../context/BagContext';

import { FooterDesktop } from '../components/Desktop/FooterDesktop';
import { Page404 } from '../pages/404';

export const Routes: React.FC = () => {

    return (
        <ProductProvider>
            <BagProvider>
                <ViewportProvider>
                    <HeaderDesktop />
                    <Switch>
                        <Route element={<Home />} path="/" />
                        <Route element={<Category />} path="/category/:category" />
                        <Route element={<Product />} path="/category/:category/:productId" />
                        <Route path="*" element={<Page404 />} />  
                    </Switch>
                    <FooterDesktop />
                </ViewportProvider>
            </BagProvider>
        </ProductProvider>
    )
}