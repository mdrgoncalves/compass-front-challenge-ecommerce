import { ProgressBar } from "./styles";

interface RatingsAverage {
    label: string;
    value: number;
    total: number;
}

export const RatingsAverage: React.FC<RatingsAverage> = ({
    label,
    value,
    total
}) => {

    return (
        <ProgressBar>
            <span>{label}</span>
            <progress value={value} max={total} />
        </ProgressBar>
    );  
};