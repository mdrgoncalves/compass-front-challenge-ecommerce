import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema(
    {
        rating: {type: Number, required: true},
        username: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        date: {type: Date, required: true},
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
        commentTitle: {type: String, required: true},
        comment: {type: String, required: true}
    }
);

const rating = mongoose.model('rating', RatingSchema);

export default rating;