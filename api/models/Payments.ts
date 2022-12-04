import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const PaymentSchema = new mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId},
        cardNumber: {type: String, required: true},
        expirationDate: {type: String, required: true},
        cvc: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
    }
);

PaymentSchema.pre('save', async function (next) {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedCardNumber = await bcrypt.hash(this.cardNumber, salt);
        const hashedCvc = await bcrypt.hash(this.cvc, salt);
        this.cardNumber = hashedCardNumber; 
        this.cvc = hashedCvc;
        next();
    } catch (error) {
        console.error(error);
    }
});

const payment = mongoose.model('payment', PaymentSchema);

export default payment;