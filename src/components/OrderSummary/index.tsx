import { useNavigate } from "react-router-dom";
import { BagState } from "../../context/BagContext";
import { IProduct } from "../../types/Products";
import { Button } from "../Button";
import { SummaryButtons, SummaryContainer, SummaryContent, SummaryLabel, TotalText } from "./styles";

interface OrderSummaryProps {
    title: string;
    withButtons?: boolean;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
    title,
    withButtons = false
}) => {

    const navigate = useNavigate();

    const { state: { bag } } = BagState();

    const subTotal = bag.reduce((acc: number, item: IProduct) => acc + (item.productPrice * item.productQuantity), 0);
    const itemQuantity = bag.reduce((acc: number, item: IProduct) => acc + item.productQuantity, 0);
    const grandTotal = subTotal + itemQuantity;

    return (
        
        <SummaryContainer>
            <h2>{title}</h2>
            <SummaryContent>
                <p>
                    <SummaryLabel>Sub Total</SummaryLabel>
                    <span>${subTotal.toFixed(2)}</span>
                </p>
                <p>
                    <SummaryLabel>Discount</SummaryLabel>
                    <span>-$0.00</span>
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