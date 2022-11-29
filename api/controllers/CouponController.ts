import { Request, Response } from "express";
import coupon from "../models/Coupon.js";

class CouponController {

    static async createCoupon(req: Request, res: Response) {

        const bodyData = req.body;

        try {
            const newCoupon = await coupon.create(bodyData);
            return res.status(201).json(newCoupon);
        } catch (error) {
            return res.status(400).
                json({ message: 'Coupon creation was unsuccessful' });
        }
    }

    static async getCoupons(req: Request, res: Response) {

        try {
            const coupons = await coupon.find();
            return res.status(200).json(coupons);
        } catch (error) {
            return res.status(400).
                json({ message: 'Coupons could not be retrieved' });
        }
    }

    static async getCouponById(req: Request, res: Response) {

        const { coupon_id } = req.params;

        try {
            const couponById = await coupon.findById(coupon_id);
            return res.status(200).json(couponById);
        } catch (error) {
            return res.status(400).
                json({ message: 'Coupon could not be retrieved' });
        }
    }

    static async desactivateCoupon(req: Request, res: Response) {

        const { coupon_id } = req.params;

        try {
            const couponById = await coupon.findById(coupon_id);
            couponById!.isActive = false;
            await couponById!.save();
            return res.status(200).json(couponById);
        } catch (error) {
            return res.status(400).
                json({ message: 'Coupon could not be desactivated' });
        }
    }

    static async getActiveCoupons(req: Request, res: Response) {

        try {
            const activeCoupons = await coupon.find({ isActive: true });
            return res.status(200).json(activeCoupons);
        } catch (error) {
            return res.status(400).
                json({ message: `Active coupons could not be retrieved ${error}` });
        }
    }
}

export default CouponController;