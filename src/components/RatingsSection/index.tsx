import { useEffect } from "react";
import { ProductState } from "../../context/ProductContext";
import { AddReview } from "./AddReview";
import { AverageCard } from "./AverageCard";
import { RatingCard } from "./RatingCard";
import { RatingsContainer } from "./styles";

interface RatingsSectionProps {
    productId: string;
}

export const RatingsSection: React.FC<RatingsSectionProps> = ({
    productId
}) => {

    const { getRatingsByProduct, productReviews } = ProductState();

    useEffect(() => {
        getRatingsByProduct(productId);
    }, [productId, productReviews]);

    return (
        
        <RatingsContainer>
            <div className='post-review'>
                <AverageCard 
                    productReviews={productReviews}
                />
                <AddReview productId={productId}/>
            </div>
            <div>
                <h2>Ratings</h2>
                {productReviews.map((review: any) => (
                    <RatingCard 
                        key={review._id}
                        rating={review.rating}
                        userName={review.username.firstName + ' ' + review.username.lastName}
                        date={review.date.split('T')[0]}
                        commentTitle={review.commentTitle}
                        comment={review.comment}
                    />
                ))}
            </div>
        </RatingsContainer>
    );  
};
