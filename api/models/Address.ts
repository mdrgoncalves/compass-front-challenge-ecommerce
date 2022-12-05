import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId},
        fullName: {type: String, required: true},
        mobileNumber: {type: String, required: true},
        street: {type: String, required: true},
        state: {type: String, required: true},
        city: {type: String, required: true},
        pincode: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
    },
    { _id: false }
);

const address = mongoose.model('address', AddressSchema);

export default address;