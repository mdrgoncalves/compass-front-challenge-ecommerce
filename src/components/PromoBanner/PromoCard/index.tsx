import { PromoImage } from './styles';

interface PromoCardProps {
    imgSrc: string;
    imgAlt: string;
}

export const PromoCard = ({
    imgSrc,
    imgAlt,
}: PromoCardProps) => {

    return (
        <div>
            <PromoImage src={imgSrc} alt={imgAlt} />
        </div>
    )
}