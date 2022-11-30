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
import { Bag } from '../pages/Bag';
import { Checkout } from '../pages/Checkout';

export const Routes: React.FC = () => {

    return (
        <ProductProvider>
            <ProductProvider>
            <BagProvider>
                    <ViewportProvider>
                        <HeaderDesktop />
                        <Switch>
                            <Route element={<Home />} path="/" />
                            <Route element={<Category />} path="/category/:category" />
                            <Route element={<Product />} path="/category/:category/:productId" />
                            <Route element={<Bag />} path="/cart" />
                            <Route element={<Checkout />} path="/checkout" />
                            <Route element={<Page404 />} path="*" />  
                        </Switch>
                        <FooterDesktop />
                    </ViewportProvider>
                </BagProvider>
        </ProductProvider>
        </ProductProvider>
    )
}