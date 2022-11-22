import { Carousel } from "../../Carousel";
import { ImageCard } from "./ImageCard";

interface ProductCarouselProps {
    images: string[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
    images
}) => {

    return (
        <Carousel>
            {images.map((image, index) => (
                <ImageCard
                    key={index}
                    imageSrc={image}
                />
            ))}
        </Carousel>
    );  
};