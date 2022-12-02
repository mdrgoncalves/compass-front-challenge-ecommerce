import { Router } from "express";
import CouponController from "../controllers/CouponController.js";
import ProductController from "../controllers/ProductController.js";
import RatingController from "../controllers/RatingController.js";
import UserController from "../controllers/UserController.js";
import WishlistController from "../controllers/WishlistController.js";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

// Create user
routes.post('/users', UserController.createUser);
// List user
routes.get('/users/:user_id');

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
// Ipdate product
routes.put('/products/:product_id', ProductController.updateProduct);

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
routes.put('/coupons/:coupon_id', CouponController.desactivateCoupon);

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

export default routes;