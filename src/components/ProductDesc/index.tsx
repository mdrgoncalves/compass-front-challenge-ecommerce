import { useWidth } from "../../utils/useWidth";
import { Carousel } from "../Carousel";
import { CopomCard } from "../CopomCard";
import { DeliveryDetails } from "./DeliveryDetails";
import { QuantityInput } from "./QuantityInput";
import { 
    CurrentPrice, 
    Discount, 
    OldPrice, 
    PriceContainer, 
    ProductDescContainer, 
    ProductDescText, 
    RatingDesktopContainer,
    RatingDesktopMobile
} from "./styles";

interface ProductDescProps {
    name: string;
    description: string;
    price: string;
    productId: number;
}

export const ProductDesc: React.FC<ProductDescProps> = ({
    name,
    description,
    price,
    productId
}) => {

    return (
        
        <>
        <ProductDescContainer>
            <ProductDescText>
                <h1>{name}</h1>
                <p>{description}</p>
            </ProductDescText>
            <RatingDesktopContainer>
                <img src='/assets/img/icons/stars-icon.svg' alt='ratings' />
                <span>(43) Ratings</span>
            </RatingDesktopContainer>
            <RatingDesktopMobile>
                <img src='/assets/img/icons/ratings-pill.svg' alt='ratings' />
                <div>
                    <p className='label'>Average Rating</p>
                    <p className='ratings'>43 Ratings & 23 Reviews</p>
                </div>
            </RatingDesktopMobile>
            <PriceContainer>
                <CurrentPrice>{price}</CurrentPrice>
                <OldPrice>$78.66</OldPrice>
                <Discount>50%OFF</Discount>
            </PriceContainer>
        </ProductDescContainer>

        {useWidth({
            renderMobile: () => (
                <Carousel>
                    <CopomCard />
                    <CopomCard />
                    <CopomCard />
                </Carousel>
            ),
            renderDesktop: () => (
                <DeliveryDetails />
            )
        })}

        {useWidth({
            renderMobile: () => (
                <DeliveryDetails />
            ),
            renderDesktop: () => (
                <Carousel>
                    <CopomCard />
                    <CopomCard />
                    <CopomCard />
                </Carousel>
            )
        })}
        <QuantityInput 
            label='Quantity'
            productId={productId}
        />
        </>
    );  
};
