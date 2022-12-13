import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { BackButton } from "../../components/Mobile/BackButton";
import { Spacer } from "../../components/Mobile/Spacer";
import { AverageCard } from "../../components/RatingsSection/AverageCard";
import { RatingCard } from "../../components/RatingsSection/RatingCard";
import { ProductState } from "../../context/ProductContext";
import { 
    ButtonWrapper, 
    CarouselWrapper, 
    ColumnWrapper, 
    MobileReviewsContainer, 
    ReviewWrapper, 
    TextWrapper 
} from "./styles";

export const MobileReviews: React.FC = () => {

    const { productId } = useParams<{ productId: string }>();
    const { getProductById, product, getRatingsByProduct, productReviews } = ProductState();

    const navigate = useNavigate();

    useEffect(() => {
        getProductById(productId);
    }, [productId]);

    useEffect(() => {
        getRatingsByProduct(productId);
    }, [productId, productReviews]);

    return (
        
        <MobileReviewsContainer>
            <ColumnWrapper>
                <BackButton />
                <TextWrapper>
                    <h2>{product.productName}</h2>
                    <h3>{product.productDescription}</h3>
                </TextWrapper>
                <AverageCard
                    productReviews={productReviews}
                />
                <CarouselWrapper>
                    <h2>Customer Photos</h2>
                    <Carousel>
                        <img src='/assets/img/products/customer-image-1.png' alt='customer image' />
                        <img src='/assets/img/products/customer-image-2.png' alt='customer image' />
                        <img src='/assets/img/products/customer-image-3.png' alt='customer image' />
                        <img src='/assets/img/products/customer-image-4.png' alt='customer image' />
                    </Carousel>
                </CarouselWrapper>
            </ColumnWrapper>
            <Spacer />
            <ReviewWrapper>
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
            </ReviewWrapper>
            <ButtonWrapper>
                <Button
                    color='primary'
                    iconType='plus'
                    onClick={() => navigate(`/${productId}/write-review`)}
                >
                    Write a Review
                </Button>
            </ButtonWrapper>
        </MobileReviewsContainer>
    );  
};