import { useNavigate } from "react-router-dom";
import { BagState } from "../../context/BagContext";
import { IProduct } from "../../types/Products";
import { Button } from "../Button";
import { CartProductCard } from "../CartProductCard";
import { ImagesWrapper, SummaryButtons, SummaryContainer, SummaryContent, SummaryLabel, TotalText } from "./styles";

interface OrderSummaryProps {
    withImages?: boolean;
    withButtons?: boolean;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
    withImages = false,
    withButtons = false
}) => {

    const navigate = useNavigate();

    const { 
        state: { bag }, 
        subTotal, 
        itemQuantity, 
        grandTotal,
        discount
    } = BagState();

    return (
        
        <SummaryContainer>
            <h2>Order Summary</h2>
            {withImages ? (
                <>
                <ImagesWrapper>
                    {bag.map((item: IProduct) => (
                        <CartProductCard
                            key={item._id}
                            imgSrc={item.productImage}
                            name={item.productName}
                            description={item.productDescription}
                            quantity={item.productQuantity}
                        />    
                    ))}
                </ImagesWrapper>
                <h2>Order Details</h2>
                </>
            ) : (
                null
            )}
            <SummaryContent>
                <p>
                    <SummaryLabel>Sub Total</SummaryLabel>
                    <span>${subTotal.toFixed(2)}</span>
                </p>
                <p>
                    <SummaryLabel>Discount</SummaryLabel>
                    <span>-${discount.toFixed(2)}</span>
                </p>
                <p>
                    <SummaryLabel>Delivery Fee</SummaryLabel>
                    <span>${itemQuantity.toFixed(2)}</span>
                </p>
                <TotalText>
                    <span>Grand Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                </TotalText>
                {withButtons && (
                    <SummaryButtons>
                        <Button 
                            color='primary'
                            onClick={() => navigate('/checkout')}
                        >
                                Place Order
                        </Button>
                        <Button 
                            color='secondary'
                            onClick={() => navigate('/')}
                        >
                                Continue Shopping
                        </Button>
                    </SummaryButtons>
                )}
            </SummaryContent>
        </SummaryContainer>
    );  
};