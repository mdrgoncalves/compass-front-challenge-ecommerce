import { Router } from "express";
import CartController from "../controllers/CartController.js";
import ProductController from "../controllers/ProductController.js";
import UserController from "../controllers/UserController.js";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

//Criar usuário
routes.post('/users', UserController.createUser);
//Listar usuário
routes.get('/users/:user_id');

//Criar produto
routes.post('/products', ProductController.createProduct);
//Deletar produto
routes.delete('/products/:product_id', ProductController.deleteProduct)

//Listar todos os produtos
routes.get('/products', ProductController.getProducts);
//Listar produto
routes.get('/products/:product_id', ProductController.getProductById);
//Listar produtos por categoria
routes.get('/products/category/:category', ProductController.getProductsByCategory);
//Atualizar produto
routes.put('/products/:product_id', ProductController.updateProduct);

//Fazer compra
routes.post('/carts/:user_id', CartController.createCart);
routes.get('/carts/:user_id', CartController.getUserCart);
routes.get('/carts/:user_id/:cart_id', CartController.getCart);

export default routes;