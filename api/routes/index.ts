import { Router } from "express";
import CartController from "../controllers/CartController.js";
import ProductController from "../controllers/ProductController.js";
import UserController from "../controllers/UserController.js";
import WishlistController from "../controllers/WishlistController.js";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

//Create user
routes.post('/users', UserController.createUser);
//List user
routes.get('/users/:user_id');

//Create product
routes.post('/products', ProductController.createProduct);
//Delete product
routes.delete('/products/:product_id', ProductController.deleteProduct)

//List all products
routes.get('/products', ProductController.getProducts);
//List product
routes.get('/products/:product_id', ProductController.getProductById);
//List products by Category
routes.get('/products/category/:category', ProductController.getProductsByCategory);
//Ipdate product
routes.put('/products/:product_id', ProductController.updateProduct);

//Fazer compra
routes.post('/carts/:user_id', CartController.createCart);
routes.get('/carts/:user_id', CartController.getUserCart);
routes.get('/carts/:user_id/:cart_id', CartController.getCart);

//Add product in Wishlist
routes.post('/wishlist/:user_id', WishlistController.createWishlist);
//List products in Wishlist
routes.get('/wishlist/:user_id', WishlistController.getUserWishlist);
//List all Wishlists
routes.get('/wishlist', WishlistController.getWishlists);
//Delete product in Wishlist
routes.delete('/wishlist/:user_id/:product_id', WishlistController.deleteProduct);
//Put product in Wishlist
routes.put('/wishlist/:user_id/:product_id', WishlistController.putProduct);

export default routes;