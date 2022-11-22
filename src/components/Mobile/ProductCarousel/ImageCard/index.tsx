import { ImageItem } from "./styles";

interface ImageCardProps {
    imageSrc: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
    imageSrc
}) => {

    return (
        <ImageItem 
            src={imageSrc} 
            alt='product card' 
        />
    );  
};