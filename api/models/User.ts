import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        image: {type: String, required: true},
        email: {type: String, required: true},
        mobileNumber: {type: Number, required: true},
        dateBirth: {type: String, required: true},
        password: {type: String, required: true},
    }
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