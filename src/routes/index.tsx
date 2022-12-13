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
import { Orders } from '../components/Orders';
import { Order } from '../components/Order';
import { Wishlist } from '../components/Wishlist';
import { Reviews } from '../components/Reviews';
import { Addresses } from '../components/Addresses';
import { SavedCards } from '../components/SavedCards';
import { About } from '../pages/About';
import { MobileSearch } from '../pages/MobileSearch';
import { MobileReviews } from '../pages/MobileReviews';

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
                    <Route element={<Orders />} path="orders" />
                    <Route element={<Order />} path="orders/:orderId" />
                    <Route element={<Wishlist />} path="wishlist" />
                    <Route element={<Reviews />} path="reviews" />
                    <Route element={<Addresses />} path="address" />
                    <Route element={<SavedCards />} path="cards" />
                </Route>
                <Route element={<Home />} path="/home" />
                <Route element={<Category />} path="/category/:category" />
                <Route element={<Product />} path="/category/:category/:productId" />
                <Route element={<Bag />} path="/cart" />
                <Route element={<Checkout />} path="/checkout" />
                <Route element={<OrderConfirmed />} path="/confirmed" />
                <Route element={<About />} path="/about" />
                <Route element={<MobileSearch />} path="/mobile-search" />
                <Route element={<MobileReviews />} path="/:productId/mobile-reviews" />
                
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