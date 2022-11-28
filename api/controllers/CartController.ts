import { Request, Response } from "express";
import cart from "../models/Cart.js";

class CartController {

    static async createCart(req: Request, res: Response) {

        const bodyData = req.body;
        const { user_id } = req.params;

        try {
            const newCart = await cart.create({ ...bodyData, username: user_id });
            await newCart.populate('products');
            return res.status(201).json(newCart);
        } catch (error) {
            return res.status(400).
                json({ message: 'Cart creation was unsuccessful' });
        }
    }

    static async getUserCart(req: Request, res: Response) {

        const { user_id } = req.params;

        try {
            const foundCart = await cart.find({ username: user_id })
                .populate('username')
                .populate('products');
            return res.status(200).json(foundCart);
        } catch (error) {
            return res.status(404).
                json({ message: 'Cart not found' });
        }
    }

    static async getCart(req: Request, res: Response) {

        const { user_id, cart_id } = req.params;

        try {
            const foundCart = await cart.findById(cart_id)
                .populate('username')
                .populate('products');
            return res.status(200).json(foundCart);
        } catch (error) {
            return res.status(404).
                json({ message: 'Cart not found' });
        }
    }
    
}

export default CartController;