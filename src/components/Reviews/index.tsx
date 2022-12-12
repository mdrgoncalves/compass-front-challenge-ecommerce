import { useEffect } from "react";
import { ProductState } from "../../context/ProductContext";
import { UserState } from "../../context/UserContex";
import { IProduct } from "../../types/Products";
import { ReviewCard } from "./ReviewCard";
import { EmptyText, ReviewsWrapper } from "./styles";

interface IReview {
    comment: string;
    commentTitle: string;
    date: string;
    product: IProduct;
    rating: number;
    username: string;
    _id: string;
}

export const Reviews: React.FC = () => {

    const { userId } = UserState();
    const { getRatingsByUser, productReviews } = ProductState();

    useEffect(() => {
        getRatingsByUser(userId);
    }, [productReviews]);

    return (
        
        <>
            {productReviews ? (
            <ReviewsWrapper>
                <h2>My Reviews</h2>
                {productReviews.map((review: IReview) => {
                    return (
                        <ReviewCard
                            key={review._id}
                            date={review.date}
                            rating={review.rating}
                            productName={review.product.productName}
                            commentTitle={review.commentTitle}
                            comment={review.comment}
                            productId={review.product._id}
                            category={review.product.productCategory}
                        />
                    )
                })}
            </ReviewsWrapper>
            ) : (
                <EmptyText>You have not reviewed any products yet.</EmptyText>
            )}
        </>
    );  
};