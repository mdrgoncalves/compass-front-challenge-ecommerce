import { useWidth } from "../../../utils/useWidth";
import { 
    FlexWrapper,
    RatingCardWrapper, 
    RatingComment, 
    RatingContent, 
    RatingHeader, 
    RatingValue 
} from "./styles";

interface RatingCardProps {
    rating: number;
    userName: string;
    date: string;
    commentTitle: string;
    comment: string;
}

export const RatingCard: React.FC<RatingCardProps> = ({
    rating,
    userName,
    date,
    commentTitle,
    comment
}) => {

    return (

        <RatingCardWrapper>
            {useWidth({
                renderMobile: () => (
                    null
                ),
                renderDesktop: () => (
                    <RatingValue>
                        <span>{rating.toFixed(1)}</span>
                    </RatingValue>
                )
            })}
            <RatingContent>
                {useWidth({
                    renderMobile: () => (
                        <FlexWrapper>
                            <RatingValue>
                                <span>{rating.toFixed(1)}</span>
                            </RatingValue>
                            <RatingHeader>
                                <h4>{userName}</h4>
                                <p>{date}</p>
                            </RatingHeader>
                        </FlexWrapper>
                    ),
                    renderDesktop: () => (
                        <RatingHeader>
                            <h4>{userName}</h4>
                            <p>{date}</p>
                        </RatingHeader>
                    )
                })}
                <RatingComment>
                    <h3>{commentTitle}</h3>
                    <p>{comment}</p>
                </RatingComment>
            </RatingContent>
        </RatingCardWrapper>
    );  
};