import { Request, Response } from "express";
import payment from "../models/Payments.js";

class PaymentController {

    static async createPayment(req: Request, res: Response) {
        
        const bodyData = req.body;

        try {
            const newPayment = await payment.create(bodyData);
            return res.status(201).json(newPayment);
        } catch (error) {
            console.log(error)
            return res.status(400).
                json({ message: 'Payment creation was unsuccessful' });
        }
    }

    static async getPayment(req: Request, res: Response) {

        const id = req.params.payment_id;
        try {
            const userPayment = await payment.findById(id).populate('user');
            return res.status(200).json(userPayment);
        } catch (error) {
            return res.status(404).
                json({ message: 'Payment not found' });
        }
    }

    static async getPaymentsByUser(req: Request, res: Response) {

        const id = req.params.user_id;
        try {
            const userPayments = await payment.find({ user: id });
            return res.status(200).json(userPayments);
        } catch (error) {
            return res.status(404).
                json({ message: 'Payment not found' });
        }
    }
}

export default PaymentController;

