import { AddToWishlistButton } from "../../AddToWishlistButton";
import { QuantityInput } from "../../ProductDesc/QuantityInput";
import { 
    ButtonWithBorder,
    ButtonWrapper,
    DescText, 
    DiscountText, 
    FlexContainer, 
    OldPriceText, 
    PriceText, 
    ProductCard, 
    ProductIcon, 
    TitleText 
} from "./styles";

interface ProductBagMobileProps {
    productId: string;
    productImage: string;
    productName: string;
    productDescription: string;
    productPrice: number;
}

export const ProductBagMobile: React.FC<ProductBagMobileProps> = ({
    productId,
    productImage,
    productName,
    productDescription,
    productPrice
}) => {

    return (
        
        <ProductCard>
            <FlexContainer gap='0.75rem'>
                <ProductIcon src={productImage} alt='product image' />
                <FlexContainer gap='0.25rem' isColumn>
                    <TitleText>{productName}</TitleText>
                    <DescText>{productDescription}</DescText>
                    <QuantityInput
                        productId={productId}
                        displayIsNone
                        marginBottom='0'
                    />
                    <FlexContainer gap='0.375rem'>
                        <PriceText>${productPrice}</PriceText>
                        <OldPriceText>$69.99</OldPriceText>
                        <DiscountText>50% OFF</DiscountText>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
            <ButtonWrapper>
                <AddToWishlistButton
                    productId={productId}
                    buttonType='text'
                />
                <ButtonWithBorder>
                    Remove
                </ButtonWithBorder>
            </ButtonWrapper>
        </ProductCard>
    );  
};