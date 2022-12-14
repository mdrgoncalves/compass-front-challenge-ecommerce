import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { CouponInput } from "../../components/CouponInput";
import { MobileHeading } from "../../components/Mobile/MobileHeading";
import { StarRating } from "../../components/RatingsSection/StarRating";
import { ProductState } from "../../context/ProductContext";
import { UserState } from "../../context/UserContex";
import { ButtonWrapper, TextArea, TitleText, WrapperWithMargin, WriteReviewContainer } from "./styles";

export const MobileWriteReview: React.FC = () => {

    const navigate = useNavigate();
    const { productId } = useParams<{ productId: string }>(); 
    const { addRating } = ProductState();
    const { userId } = UserState();

    const [rating, setRating] = useState(1);
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
            "username": userId,
            "date": today,
            "product": productId,
            "commentTitle": '',
            "comment": comment
        }

        addRating(data);
        alert('Success!');
        setComment('');
    }

    return (

        <WriteReviewContainer>
            <WrapperWithMargin
                margin='0 0 0.5rem 0'
            >
                <MobileHeading
                    title='Write a Review'
                    withBack
                    withPadding
                    size='small'
                    onClick={() => navigate(-1)}
                />
            </WrapperWithMargin>
            <WrapperWithMargin
                margin='0 0 1.5rem 0'
            >
                <TitleText>Product Rating</TitleText>
                <StarRating
                    setRating = {setRating}
                />
            </WrapperWithMargin>
            <WrapperWithMargin
                margin='0 0 3.125rem 0'
            >
                <CouponInput
                    placeholder='Enter Valid Pincode'
                />
            </WrapperWithMargin>
            <div>
                <TitleText>Review Description</TitleText>
                <TextArea
                    placeholder='Enter Description'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <ButtonWrapper>
                <Button
                    color='primary'
                    onClick={handleClick}
                >
                    Submit Review
                </Button>
            </ButtonWrapper>
        </WriteReviewContainer>
    );  
};