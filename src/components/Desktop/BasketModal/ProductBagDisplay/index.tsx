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
    price: number;
    onClick: () => void;
    productId: string;
}

export const ProductBagDisplay: React.FC<ProductBagDisplayProps> = ({
    imgSrc,
    title,
    description,
    price,
    onClick,
    productId,
}) => {

    return (
        
        <ProductContainer>
            <ProductLeft>
                <ProductImage src={imgSrc} alt='product image' />
                <ProductContent>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <QuantityInput 
                        productId={productId}
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