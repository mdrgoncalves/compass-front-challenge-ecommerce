import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName: {type: String, required: true},
        phoneNumber: {type: Number, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        adress: {
            street: {type: String, required: true},
            state: {type: String, required: true},
            city: {type: String, required: true},
            pinCode: {type: Number, required: true}
        },
        payment: {
            card: {
                cardNumber: {type: Number},
                cvc: {type: Number}
            }
        },
    }
);

const user = mongoose.model('user', UserSchema);

export default user;