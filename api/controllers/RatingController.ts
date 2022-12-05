import { Request, Response } from "express";
import rating from "../models/Rating.js";

class RatingController {

    static async createRating(req: Request, res: Response) {
            
        const bodyData = req.body;

        try {
            const newRating = await rating.create(bodyData);
            return res.status(201).json(newRating);
        } catch (error) {
            return res.status(400).
                json({ message: 'Rating creation was unsuccessful' });
        }
    }

    static async getRatings(req: Request, res: Response) {

        try {
            const allRatings = await rating.find().populate('username');
            return res.status(200).json(allRatings);
        } catch (error) {
            return res.status(400).
                json({ message: 'Rating list was unsuccessful' });
        }
    }

    static async getRatingById(req: Request, res: Response) {

        const id = req.params.rating_id;

        try {
            const ratingById = await rating.findById(id).populate('username');
            return res.status(200).json(ratingById);
        } catch (error) {
            return res.status(400).
                json({ message: 'Rating list was unsuccessful' });
        }
    }

    static async getRatingsByProduct(req: Request, res: Response) {

        const id = req.params.product_id;

        try {
            const ratingByProduct = await rating.find({ product: id }).populate('username');
            return res.status(200).json(ratingByProduct);
        } catch (error) {
            return res.status(400).
                json({ message: 'Rating list was unsuccessful' });
        }
    }
    
    static async getRatingsByUser(req: Request, res: Response) {

        const id = req.params.user_id;

        try {
            const ratingByUser = await rating.find({ username: id });
            return res.status(200).json(ratingByUser);
        } catch (error) {
            return res.status(400).
                json({ message: 'Rating list was unsuccessful' });
        }
    }
}

export default RatingController;