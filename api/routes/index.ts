import { Router } from "express";
import AddressController from "../controllers/AddressController.js";
import CouponController from "../controllers/CouponController.js";
import OrderController from "../controllers/OrderController.js";
import PaymentController from "../controllers/PaymentsController.js";
import ProductController from "../controllers/ProductController.js";
import RatingController from "../controllers/RatingController.js";
import UserController from "../controllers/UserController.js";
import WishlistController from "../controllers/WishlistController.js";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Ecommerce API');
});

// Create user
routes.post('/users', UserController.createUser);
// List user
routes.get('/users/:user_id', UserController.getUser);
// List all users
routes.get('/users', UserController.getAllUsers);
// Update user
routes.put('/users/:user_id', UserController.updateUser);

// Create product
routes.post('/products', ProductController.createProduct);
// Delete product
routes.delete('/products/:product_id', ProductController.deleteProduct)
// List all products
routes.get('/products', ProductController.getProducts);
// List product
routes.get('/products/:product_id', ProductController.getProductById);
// List products by Category
routes.get('/products/category/:category', ProductController.getProductsByCategory);
// Update product
routes.put('/products/:product_id', ProductController.updateProduct);
// Get products by Category and Page
routes.get('/products/category/:category/page/:page/limit/:limit', ProductController.getProductsByCategoryAndPage);
// Get products by Category and Page sorted by Name
routes.get('/products/category/:category/page/:page/limit/:limit/sort/name', ProductController.getProductsByCategoryAndPageSortedByName);
// Get products by Category and Page sorted by Price
routes.get('/products/category/:category/page/:page/limit/:limit/sort/price', ProductController.getProductsByCategoryAndPageSortedByPrice);

// Add product in Wishlist
routes.post('/wishlist/:user_id', WishlistController.createWishlist);
// List products in Wishlist
routes.get('/wishlist/:user_id', WishlistController.getUserWishlist);
// List all Wishlists
routes.get('/wishlist', WishlistController.getWishlists);
// Delete product in Wishlist
routes.delete('/wishlist/:user_id/:product_id', WishlistController.deleteProduct);
// Put product in Wishlist
routes.put('/wishlist/:user_id/:product_id', WishlistController.putProduct);

// Add coupon
routes.post('/coupons', CouponController.createCoupon);
// List coupons
routes.get('/coupons', CouponController.getCoupons);
// List active coupons
routes.get('/coupons/active', CouponController.getActiveCoupons);
// List coupon by id
routes.get('/coupons/:coupon_id', CouponController.getCouponById);
// Desactivate coupon
routes.put('/coupons/:coupon_id/desactivate', CouponController.desactivateCoupon);

// Create rating
routes.post('/ratings', RatingController.createRating);
// List ratings
routes.get('/ratings', RatingController.getRatings);
// List rating by id
routes.get('/ratings/:rating_id', RatingController.getRatingById);
// List ratings by product
routes.get('/ratings/product/:product_id', RatingController.getRatingsByProduct);
// List ratings by user
routes.get('/ratings/user/:user_id', RatingController.getRatingsByUser);

// Create address
routes.post('/address', AddressController.createAddress);
// List address
routes.get('/address/:address_id', AddressController.getAddress);
// List address by User
routes.get('/address/user/:user_id', AddressController.getAddressByUser);

// Create Payment
routes.post('/payments', PaymentController.createPayment);
// List Payment
routes.get('/payments/:payment_id', PaymentController.getPayment);
// List Payments by User
routes.get('/payments/user/:user_id', PaymentController.getPaymentsByUser);

// Create Order
routes.post('/orders', OrderController.createOrder);
// List Order
routes.get('/orders/:order_id', OrderController.getOrder);
// List Orders by User
routes.get('/orders/user/:user_id', OrderController.getOrdersByUser);
// List Orders by User and Status
routes.get('/orders/user/:user_id/:status', OrderController.getOrdersByUserAndStatus);
// Update Order
routes.put('/orders/:order_id', OrderController.updateOrder);

export default routes;