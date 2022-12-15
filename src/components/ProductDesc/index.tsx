import { useEffect } from "react";
import { CouponState } from "../../context/CouponContext";
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
    price: number;
    productId: string;
}

interface ICoupon {
    _id: string;
    description: string;
    code: string;
}

export const ProductDesc: React.FC<ProductDescProps> = ({
    name,
    description,
    price,
    productId
}) => {

    const { getCoupons, coupons } = CouponState();

    useEffect(() => {
        getCoupons();
        console.log(coupons);
    }, []);
    
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
                <CurrentPrice>${price}</CurrentPrice>
                <OldPrice>$78.66</OldPrice>
                <Discount>50%OFF</Discount>
            </PriceContainer>
        </ProductDescContainer>

        {useWidth({
            renderMobile: () => (
                <Carousel>
                    {Object.values(coupons).map((coupon: any) => (
                        <CopomCard
                            key={coupon._id}
                            description={coupon.description}
                            code={coupon.code}
                        />
                    ))}
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
                    {Object.values(coupons).map((coupon: any) => (
                        <CopomCard
                            key={coupon._id}
                            description={coupon.description}
                            code={coupon.code}
                        />
                    ))}
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
