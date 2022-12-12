import { Request, Response } from "express";
import order from "../models/Order.js";

class OrderController {

    static async createOrder(req: Request, res: Response) {

        const bodyData = req.body;

        try {
            const newOrder = await order.create(bodyData);
            return res.status(201).json(newOrder);
        } catch (error) {
            return res.status(400).
                json({ message: 'Order creation was unsuccessful' });
        }
    }
    
    static async getOrder(req: Request, res: Response) {
        const id = req.params.order_id;
        try {
            const userOrder = await order.findById(id).populate('user').populate('address').populate({
                path: 'orderItems',
                populate: { path: 'product' }
            });
            return res.status(200).json(userOrder);
        } catch (error) {
            return res.status(404).
                json({ message: 'Order not found' });
        }
    }

    static async getOrdersByUser(req: Request, res: Response) {

        const id = req.params.user_id;

        try {
            const userOrder = await order.find({ user: id }).populate({
                path: 'orderItems',
                populate: { path: 'product' }
            });
            return res.status(200).json(userOrder);
        } catch (error) {
            return res.status(404).
                json({ message: 'Order not found' });
        }
    }

    static async getOrdersByUserAndStatus(req: Request, res: Response) {
            
        const id = req.params.user_id;
        const status = req.params.status;

        try {
            const userOrder = await order.find({ user: id
                , status: status });
            return res.status(200).json(userOrder);
        } catch (error) {
            return res.status(404).
                json({ message: 'Order not found' });
        }
    }

    static async updateOrder(req: Request, res: Response) {

        const id = req.params.order_id;
        const bodyData = req.body;

        try {
            const updatedOrder = await order.findByIdAndUpdate
                (id, bodyData, { new: true });
            return res.status(200).json(updatedOrder);
        } catch (error) {
            return res.status(404).
                json({ message: 'Order not found' });
        }
    }
}

export default OrderController;