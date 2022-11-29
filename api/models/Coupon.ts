import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema(
    {
        code: {type: String, required: true},
        description: {type: String, required: true},
        discount: {type: Number, required: true},
        isActive: {type: Boolean, required: true}
    }
);

const coupon = mongoose.model('coupon', CouponSchema);

export default coupon;