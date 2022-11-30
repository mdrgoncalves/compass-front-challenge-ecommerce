import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { CheckoutForm } from "../../components/CheckoutForm";
import { CollapseButtonDesktop } from "../../components/Desktop/CollapseButtonDesktop";
import { PageHeader } from "../../components/Desktop/PageHeader";
import { OrderSummary } from "../../components/OrderSummary";
import { PaymentSection } from "../../components/PaymentSection";
import { 
    ButtonWrapper, 
    CheckoutContainer, 
    CheckoutContent, 
    RightContainer 
} from "./styles";

export const Checkout: React.FC = () => {

    const [cardNumber, setCardNumber] = useState(0);
    const [cardDate, setCardDate] = useState('');
    const [cardCvv, setCardCvv] = useState(0);

    return (
        
        <CheckoutContainer>
            <PageHeader
                title='Checkout'
                paths={['Checkout']}
            />
            <CheckoutContent>
                <RightContainer>
                    <CollapseButtonDesktop label='Add New Address'>
                        <CheckoutForm />
                    </CollapseButtonDesktop>
                    <CollapseButtonDesktop label='Select Payment Method'>
                        <PaymentSection
                            setCardNumberState={setCardNumber}
                            setCardDateState={setCardDate}
                            setCardCvvState={setCardCvv}
                        />
                    </CollapseButtonDesktop>
                </RightContainer>
                <OrderSummary withImages />
            </CheckoutContent>
            <ButtonWrapper>
                <Link to='/cart'>Back to Cart</Link>
                <Button 
                    color='primary'
                    onClick={() => console.log(cardNumber, cardDate, cardCvv)}
                >
                    Place Order
                </Button>
            </ButtonWrapper>
        </CheckoutContainer>
    );  
};
