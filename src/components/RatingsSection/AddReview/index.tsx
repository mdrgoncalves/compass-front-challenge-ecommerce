import { useState } from "react";
import { ProductState } from "../../../context/ProductContext";
import { Button } from "../../Button";
import { StarRating } from "../StarRating";
import { PostReviewContainer, PostReviewContent } from "./styles";

interface AddReviewProps {
    productId: string;
}

export const AddReview: React.FC<AddReviewProps> = ({
    productId
}) => {

    const { addRating } = ProductState();

    const [rating, setRating] = useState(1);
    const [commentTitle, setCommentTitle] = useState('');
    const [comment, setComment] = useState('');

    const handleDate = () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    const handleClick = () => {
        const today = handleDate();
        
        const data = {
            "rating": rating,
            "username": "6382e7cfb066a32b381fdb0f",
            "date": today,
            "product": productId,
            "commentTitle": commentTitle,
            "comment": comment
        }

        addRating(data);
        setCommentTitle('');
        setComment('');
    }

    return (
        
        <PostReviewContainer>
            <h3>Add Review</h3>
            <PostReviewContent>
                <p>Product Rating</p>
                <StarRating 
                    setRating = {setRating}
                />
            </PostReviewContent>
            <PostReviewContent>
                <p>Review Title</p>
                <input 
                    type='text' 
                    value={commentTitle}
                    onChange={(e) => setCommentTitle(e.target.value)}
                />
            </PostReviewContent>
            <PostReviewContent>
                <p>Review Description</p>
                <textarea 
                    maxLength={150}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </PostReviewContent>
            <Button 
                color='primary'
                onClick={handleClick}
            >
                Post Review
            </Button>
        </PostReviewContainer>
    );  
};