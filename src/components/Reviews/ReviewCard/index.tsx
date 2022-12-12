import { useNavigate } from "react-router-dom";
import { StarsView } from "./StarsView";
import { CommentText, CommentTitle, DateText, FlexWrapper, ProductText } from "./styles";

interface ReviewCardProps {
    date: string;
    rating: number;
    productName: string;
    commentTitle: string;
    comment: string;
    productId: string;
    category: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
    date,
    rating,
    productName,
    commentTitle,
    comment,
    productId,
    category
}) => {

    const navigate = useNavigate();

    const reviewDate = date.split('T')[0];

    const reviewDateFormatted =
        new Date(reviewDate)
            .toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
            })
            .split(' ');

    const formattedDate = `${reviewDateFormatted[1]} ${reviewDateFormatted[0]} ${reviewDateFormatted[2]}`
        .replace(',', '');

    return (
        
        <FlexWrapper column>
            <FlexWrapper justify>
                <FlexWrapper column>
                    <DateText>{formattedDate}</DateText>
                    <StarsView
                        starsNumber={rating}
                    />
                </FlexWrapper>
                <button
                    onClick={
                        () => navigate(`/category/${category}/${productId}`)
                    }
                >
                    <img src='/assets/img/chevron-right-icon.svg' alt='right chevron' />
                </button>
            </FlexWrapper>
            <ProductText>{productName}</ProductText>
            <CommentTitle>{commentTitle}</CommentTitle>
            <CommentText>{comment}</CommentText>
        </FlexWrapper>
    );  
};