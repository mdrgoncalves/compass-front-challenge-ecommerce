import { useEffect, useState } from "react";
import { IRating } from "../../../types/Rating";
import { RatingsAverage } from "../RatingsAverage";
import { AverageHeader, AverageTitle, AverageValue, AverageWrapper } from "./styles";

interface AverageCardProps {
    productReviews: IRating[];
}

export const AverageCard: React.FC<AverageCardProps> = ({
    productReviews
}) => {

    const [fiveStar, setFiveStar] = useState<IRating[]>([]);
    const [fourStar, setFourStar] = useState<IRating[]>([]);
    const [threeStar, setThreeStar] = useState<IRating[]>([]);
    const [twoStar, setTwoStar] = useState<IRating[]>([]);
    const [oneStar, setOneStar] = useState<IRating[]>([]);
    const [totalReviews, setTotalReviews] = useState(0);
    const [average, setAverage] = useState(0);
    const [averageLabels, setAverageLabels] = useState<Object[]>([]);

    useEffect(() => {
        const fiveStar = productReviews?.filter((review: IRating) => review.rating === 5);
        const fourStar = productReviews?.filter((review: IRating) => review.rating === 4);
        const threeStar = productReviews?.filter((review: IRating) => review.rating === 3);
        const twoStar = productReviews?.filter((review: IRating) => review.rating === 2);
        const oneStar = productReviews?.filter((review: IRating) => review.rating === 1);
        const totalReviews = productReviews?.length;
        const average = productReviews?.reduce((acc: number, review: IRating) => acc + review.rating, 0) / totalReviews;
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

        <AverageWrapper>
            <AverageHeader>
                <AverageValue>{average.toFixed(1)}</AverageValue>
                <AverageTitle>Average Rating</AverageTitle>
            </AverageHeader>
            {averageLabels.map((label, index) => (
                <RatingsAverage
                    key={index}
                    label={Object.keys(label)[0]}
                    value={Object.values(label)[0]?.length}
                    total={totalReviews}
                />
            ))}
        </AverageWrapper>
    );  
};