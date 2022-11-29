import { Request, Response } from "express";
import wishlist from "../models/Wishlist.js";

class WishlistController {

    static async createWishlist(req: Request, res: Response) {

        const bodyData = req.body;
        const { user_id } = req.params;

        try {
            const newWishlist = await wishlist.create({ ...bodyData, username: user_id });
            await newWishlist.populate('products');
            await newWishlist.populate('username');
            return res.status(201).json(newWishlist);
        } catch (error) {
            return res.status(400).
                json({ message: 'Wishlist creation was unsuccessful' });
        }
    }

    static async getUserWishlist(req: Request, res: Response) {
            
        const { user_id } = req.params;

        try {
            const userWishlist = await wishlist.findOne
                ({ username: user_id }).populate('products').populate('username');
            return res.status(200).json(userWishlist);
        } catch (error) {
            return res.status(400).
                json({ message: 'Wishlist search was unsuccessful' });
        }
    }

    static async deleteProduct(req: Request, res: Response) {

        const { user_id, product_id } = req.params;

        try {
            const userWishlist = await
                wishlist.findOneAndUpdate
                    ({ username: user_id }, { $pull: { products: product_id } });
            return res.status(200).json(userWishlist);
        } catch (error) {
            return res.status(400).
                json({ message: 'Product deletion was unsuccessful' });
        }
    }

    static async putProduct(req: Request, res: Response) {

        const { user_id, product_id } = req.params;

        try {
            const userWishlist = await
                wishlist.findOneAndUpdate
                    ({ username: user_id }, { $push: { products: product_id } });
            return res.status(200).json(userWishlist);
        } catch (error) {
            return res.status(400).
                json({ message: 'Product insertion was unsuccessful' });
        }
    }

    static async getWishlists(req: Request, res: Response) {
            
        try {
            const allWishlists = await wishlist.find();
            return res.status(200).json(allWishlists);
        } catch (error) {
            return res.status(400).
                json({ message: 'Wishlist search was unsuccessful' });
        }
    }
}

export default WishlistController;