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
import CouponProvider from '../context/CouponContext';
import UserProvider from '../context/UserContex';
import { OrderConfirmed } from '../pages/OrderConfirmed';
import { SignupHome } from '../pages/SignupHome';
import { SignupPhone } from '../pages/SignupPhone';
import { SignupOtp } from '../pages/SignupOtp';
import { Profile } from '../pages/Profile';
import { ProfileForm } from '../components/ProfileForm';
import { Refer } from '../components/Refer';

export const Routes: React.FC = () => {

    return (
        
        <UserProvider>
        <ProductProvider>
        <CouponProvider>
        <BagProvider>
        <ViewportProvider>
            <HeaderDesktop />
            <Switch>
                <Route element={<SignupHome />} path="/" />
                <Route element={<SignupPhone />} path="/signup-phone" />
                <Route element={<SignupOtp />} path="/signup-otp" />
                <Route element={<Profile />} path="/profile">
                    <Route element={<ProfileForm />} path="information" />
                    <Route element={<Refer />} path="refer" />
                    <Route element={<h2>ORDERS</h2>} path="orders" />
                    <Route element={<h2>WISHLIST</h2>} path="wishlist" />
                    <Route element={<h2>REVIEWS</h2>} path="reviews" />
                    <Route element={<h2>ADDRESSES</h2>} path="address" />
                    <Route element={<h2>CARDS</h2>} path="cards" />
                </Route>
                <Route element={<Home />} path="/home" />
                <Route element={<Category />} path="/category/:category" />
                <Route element={<Product />} path="/category/:category/:productId" />
                <Route element={<Bag />} path="/cart" />
                <Route element={<Checkout />} path="/checkout" />
                <Route element={<OrderConfirmed />} path="/confirmed" />
                <Route element={<Page404 />} path="*" />  
            </Switch>
            <FooterDesktop />
        </ViewportProvider>
        </BagProvider>
        </CouponProvider>
        </ProductProvider>
        </UserProvider>
    )
}