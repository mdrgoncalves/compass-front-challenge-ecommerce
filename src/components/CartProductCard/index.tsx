import { ProductCard } from "./styles";

interface CartProductCardProps {
    imgSrc: string;
    name: string;
    description: string;
    quantity: number;
}

export const CartProductCard: React.FC<CartProductCardProps> = ({
    imgSrc,
    name,
    description,
    quantity
}) => {

    return (
        
        <ProductCard>
            <img src={imgSrc} alt={`${name} image`} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Qty - {quantity}</p>
            </div>
        </ProductCard>
    );  
};