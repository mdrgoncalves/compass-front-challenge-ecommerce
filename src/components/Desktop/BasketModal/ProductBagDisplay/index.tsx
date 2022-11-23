import { useEffect, useState } from "react";
import { QuantityInput } from "../../../ProductDesc/QuantityInput";
import { 
    ProductContainer, 
    ProductContent, 
    ProductImage, 
    ProductLeft,
    ProductRight
} from "./styles";

interface ProductBagDisplayProps {
    imgSrc: string;
    title: string;
    description: string;
    price: string;
    onClick: () => void;
    setState?: (value: number) => void;
}

export const ProductBagDisplay: React.FC<ProductBagDisplayProps> = ({
    imgSrc,
    title,
    description,
    price,
    onClick,
    setState
}) => {

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (setState) {
            setState(quantity);
        }
    }, [quantity]);

    return (
        
        <ProductContainer>
            <ProductLeft>
                <ProductImage src={imgSrc} alt='product image' />
                <ProductContent>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <QuantityInput 
                        setState={setQuantity}
                    />
                </ProductContent>
            </ProductLeft>
            <ProductRight>
                <button onClick={onClick}>
                    <img src='/assets/img/icons/cross-small-icon.svg' alt='close modal' />
                </button>
                <p>{price}</p>
            </ProductRight>
        </ProductContainer>
    );  
};