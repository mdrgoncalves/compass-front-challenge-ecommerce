import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        products: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'product'
        }],
        username: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
    }
);

const cart = mongoose.model('cart', CartSchema);

export default cart;