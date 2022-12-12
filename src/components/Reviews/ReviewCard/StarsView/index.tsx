import { useState } from "react";
import { StarIcon } from "../../../RatingsSection/StarRating/style";
import { StarsWrapper } from "./styles";

interface StarsViewProps {
    starsNumber: number;
}

export const StarsView: React.FC<StarsViewProps> = ({
    starsNumber
}) => {

    const stars = Array(5).fill(0);
    const [currentValue] = useState(starsNumber);

    return (
        
        <StarsWrapper>
            {stars.map((_, index) => {
                return (
                        <StarIcon
                        key={index}
                        src='/assets/img/icons/star-icon.svg'
                        alt='star'
                        className={currentValue > index ? 'yellow' : ''}
                    />
                )
            })}
        </StarsWrapper>
    );  
};