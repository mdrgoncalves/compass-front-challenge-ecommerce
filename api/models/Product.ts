import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        productName: {type: String, required: true},
        productImage: {type: String, required: true},
        productDescription: {type: String, required: true},
        productPrice: {type: Number, required: true},
        productCategory: {type: String, required: true},
        productQuantity: {type: Number, required: true},
    }
);

const product = mongoose.model('product', ProductSchema);

export default product;