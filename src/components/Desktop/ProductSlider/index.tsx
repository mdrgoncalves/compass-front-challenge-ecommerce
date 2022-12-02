import { useEffect, useState } from "react";
import { BigImage, SliderContainer, Thumbnail, ThumbsContainer } from "./styles";

interface ProductSliderProps {
    productImages: string[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
    productImages
}) => {

    const images = [
        {
            id: 0, 
            value: productImages[0]
        },
        {
            id:1, 
            value: productImages[1]
        },
        {
            id:2, 
            value: productImages[2]
        },
        {
            id:3, 
            value: productImages[3]
        },
    ];

    const [image, setImage] = useState(images[0]);

    useEffect(() => {
        setImage(images[0]);
    }, [productImages]);

    const handleClick = (index: number) => {
        const sliderImg = images[index];
        setImage(sliderImg);
    }

    const nextImage = () => {
        const index = image.id + 1;
        if (index > images.length - 1) {
            setImage(images[0]);
        } else {
            setImage(images[index]);
        }
    }

    const prevImage = () => {
        const index = image.id - 1;
        if (index < 0) {
            setImage(images[images.length - 1]);
        } else {
            setImage(images[index]);
        }
    }

    return (
        <SliderContainer>
            <picture>
                <BigImage src={image.value} alt="product"/>
            </picture>
            <ThumbsContainer>
                <button onClick={prevImage}>
                    <img src="/assets/img/chevron-left-icon.svg" alt="arrow-left"/>
                </button>
                {images.map((img, index) => (
                    <Thumbnail
                        key={img.id}
                        src={img.value} 
                        onClick={() => handleClick(index)}  
                    />
                ))}
                <button onClick={nextImage}>
                    <img src="/assets/img/chevron-right-icon.svg" alt="arrow right"/>
                </button>
            </ThumbsContainer>
        </SliderContainer>
    );  
};