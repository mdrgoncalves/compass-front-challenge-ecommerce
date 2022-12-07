import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId},
        firstName: {type: String},
        lastName: {type: String},
        image: {type: String},
        email: {type: String},
        mobileNumber: {type: Number, required: true},
        dateBirth: {type: String},
        password: {type: String, required: true},
    },
    { _id: false }
);

UserSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        console.error(error);
    }
});


const user = mongoose.model('user', UserSchema);

export default user;