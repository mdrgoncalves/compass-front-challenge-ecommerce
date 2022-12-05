import { useEffect, useState } from "react";
import { ProductState } from "../../context/ProductContext";
import { IRating } from "../../types/Rating";
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

    // List by Rating
    const [fiveStar, setFiveStar] = useState<IRating[]>([]);
    const [fourStar, setFourStar] = useState<IRating[]>([]);
    const [threeStar, setThreeStar] = useState<IRating[]>([]);
    const [twoStar, setTwoStar] = useState<IRating[]>([]);
    const [oneStar, setOneStar] = useState<IRating[]>([]);
    const [totalReviews, setTotalReviews] = useState(0);
    const [average, setAverage] = useState(0);
    const [averageLabels, setAverageLabels] = useState<Object[]>([]);

    useEffect(() => {
        const fiveStar = productReviews.filter((review: IRating) => review.rating === 5);
        const fourStar = productReviews.filter((review: IRating) => review.rating === 4);
        const threeStar = productReviews.filter((review: IRating) => review.rating === 3);
        const twoStar = productReviews.filter((review: IRating) => review.rating === 2);
        const oneStar = productReviews.filter((review: IRating) => review.rating === 1);
        const totalReviews = productReviews.length;
        const average = productReviews.reduce((acc: number, review: IRating) => acc + review.rating, 0) / totalReviews;
        const averageLabels = [
            { "5.0": fiveStar },
            { "4.0": fourStar },
            { "3.0": threeStar },
            { "2.0": twoStar },
            { "1.0": oneStar }
        ];

        setFiveStar(fiveStar);
        setFourStar(fourStar);
        setThreeStar(threeStar);
        setTwoStar(twoStar);
        setOneStar(oneStar);
        setTotalReviews(totalReviews);
        setAverage(average);
        setAverageLabels(averageLabels);
    }, [productReviews]);

    return (
        
        <RatingsContainer>
            <div className='post-review'>
                <AverageCard 
                    average={average}
                    averageLabels={averageLabels}
                    totalReviews={productReviews.length}
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
