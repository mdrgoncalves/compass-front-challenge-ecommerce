import { AddToBagButton } from "../../AddToBagButton";
import { ButtonsContainer } from "./styles";

interface ProductMobileButtonsProps {
    product: any;
}

export const ProductMobileButtons: React.FC<ProductMobileButtonsProps> = ({
    product
}) => {

    return (
        
        <ButtonsContainer>
            <img src='/assets/img/wishlist-icon.svg' alt='favorite' />
            <AddToBagButton product={product}/>
        </ButtonsContainer>
    );  
};