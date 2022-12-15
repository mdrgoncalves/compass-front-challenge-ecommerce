import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        payment: {type: mongoose.Schema.Types.ObjectId, ref: 'payment'},
        address: {type: mongoose.Schema.Types.ObjectId, ref: 'address'},
        orderItems: [
            {
                product: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
                quantity: {type: Number, required: true},
                price: {type: Number, required: true},
            }
        ],
        subTotal: {type: Number, required: true},
        discount: {type: Number, required: true},
        deliveryFee: {type: Number, required: true},
        grandTotal: {type: Number, required: true},
        date: {type: String, required: true},
        status: {type: String, required: true}
    }
);

const order = mongoose.model('order', OrderSchema);

export default order;