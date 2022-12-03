import { useState } from "react";
import { StarIcon } from "./style";

interface StarRatingProps {
    setRating: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
    setRating
}) => {

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(1);

    const handleClick = (value: number) => {
        setCurrentValue(value);
        setRating(value);
    }

    return (
        
        <div>
            {stars.map((_, index) => {
                return (
                    <StarIcon
                        key={index}
                        src='/assets/img/icons/star-icon.svg'
                        alt='star'
                        onClick={() => handleClick(index + 1)}
                        className={currentValue > index ? 'yellow' : ''}
                    />
                )
            })}
        </div>
    );  
};