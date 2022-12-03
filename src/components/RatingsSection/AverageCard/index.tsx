import { RatingsAverage } from "../RatingsAverage";
import { AverageHeader, AverageTitle, AverageValue, AverageWrapper } from "./styles";

interface AverageCardProps {
    average: number;
    averageLabels: Object[];
    totalReviews: number;
}

export const AverageCard: React.FC<AverageCardProps> = ({
    average,
    averageLabels,
    totalReviews
}) => {

    return (

        <AverageWrapper>
            <AverageHeader>
                <AverageValue>{average.toFixed(1)}</AverageValue>
                <AverageTitle>Average Rating</AverageTitle>
            </AverageHeader>
            {averageLabels.map((label, index) => (
                <RatingsAverage
                    key={index}
                    label={Object.keys(label)[0]}
                    value={Object.values(label)[0].length}
                    total={totalReviews}
                />
            ))}
        </AverageWrapper>
    );  
};