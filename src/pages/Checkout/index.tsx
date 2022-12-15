import mongoose from "mongoose";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { CheckoutForm } from "../../components/CheckoutForm";
import { CollapseButtonDesktop } from "../../components/Desktop/CollapseButtonDesktop";
import { PageHeader } from "../../components/Desktop/PageHeader";
import { OrderSummary } from "../../components/OrderSummary";
import { PaymentSection } from "../../components/PaymentSection";
import { UserState } from "../../context/UserContex";
import { 
    ButtonWrapper, 
    ButtonWrapperMobile, 
    CheckoutContainer, 
    CheckoutContent, 
    CheckoutMobileContainer, 
    FlexWrapper, 
    RightContainer, 
    WrapperWithTitle
} from "./styles";
import { BagState } from "../../context/BagContext";
import { IProduct } from "../../types/Products";
import { useWidth } from "../../utils/useWidth";
import { MobileHeading } from "../../components/Mobile/MobileHeading";
import { CouponState } from "../../context/CouponContext";

export const Checkout: React.FC = () => {

    const [cardNumber, setCardNumber] = useState(0);
    const [cardDate, setCardDate] = useState('');
    const [cardCvv, setCardCvv] = useState(0);
    const [addressId, setAddressId] = useState('');
    const [trigger, setTrigger] = useState(0);
    const [actived, setActived] = useState(false);

    const navigate = useNavigate();

    const { userId, createPayment, createOrder } = UserState();
    const { desactivateCoupon } = CouponState()

    const {
        state: { bag },
        subTotal,
        itemQuantity,  
        grandTotal,
        discount,
        dispatch
    } = BagState();
    
    let paymentId: string;

    const postPayment = () => {
        
        const id = new mongoose.Types.ObjectId();
        paymentId = id.toString();
        const finalNumbers = String(cardNumber).slice(-2);

        const payment = {
            "_id": id,
            "cardNumber": cardNumber,
            "expirationDate": cardDate,
            "cvc": cardCvv,
            "finalNumbers": finalNumbers,
            "user": userId
        }

        createPayment(payment);
    }

    const postOrder = () => {

        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        const order = {
            "user": userId,
            "payment": paymentId,
            "address": addressId,
            "orderItems": 
                bag.map((product: IProduct) => {
                    return {
                        "product": product._id,
                        "quantity": product.productQuantity,
                        "price": product.productPrice
                    }
                }),
            "subTotal": subTotal,
            "discount": discount,
            "deliveryFee": itemQuantity,
            "grandTotal": grandTotal,
            "date": date,
            "status": 'processing'
        }

        createOrder(order);
        dispatch({ type: 'CLEAR_BAG' });
        desactivateCoupon();
    }

    const clickHandler = () => {
        setTrigger(trigger => trigger + 1);
        setActived(true);
    }

    useEffect(() => {
        if (actived) {
            postPayment();
            postOrder();
            navigate('/confirmed', { replace: true });
            setActived(false);
        }
    }, [addressId]);

    return (
        
        <>
        {useWidth({
            renderMobile: () => (
                <>
                <CheckoutMobileContainer>
                    <MobileHeading
                        title='Order Summary'
                        withBack
                        withPadding
                        size='small'
                        onClick={() => navigate(-1)}
                    />
                    <FlexWrapper>
                        <OrderSummary
                            withImages
                        />
                        <WrapperWithTitle>
                            <h3>Deliver to</h3>
                            <CheckoutForm
                                setAddressId={setAddressId}
                                trigger={trigger}
                            />
                        </WrapperWithTitle>
                        <WrapperWithTitle>
                            <h3>Payment</h3>
                            <PaymentSection
                                setCardNumberState={setCardNumber}
                                setCardDateState={setCardDate}
                                setCardCvvState={setCardCvv}
                            />
                        </WrapperWithTitle>
                    </FlexWrapper>
                    <ButtonWrapperMobile>
                        <Button
                            type='submit'
                            form='checkout'
                            color='primary'
                            onClick={() => clickHandler()}
                        >
                            Pay Now
                        </Button>
                    </ButtonWrapperMobile>
                </CheckoutMobileContainer>
                </>
            ),
            renderDesktop: () => ( 
                <CheckoutContainer>
                    <PageHeader
                        title='Checkout'
                        paths={['Checkout']}
                    />
                    <CheckoutContent>
                        <RightContainer>
                            <CollapseButtonDesktop label='Add New Address'>
                                <CheckoutForm 
                                    setAddressId={setAddressId}
                                    trigger={trigger}
                                />
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
                            type='submit'
                            form='checkout'
                            color='primary'
                            onClick={() => clickHandler()}
                        >
                            Place Order
                        </Button>
                    </ButtonWrapper>
                </CheckoutContainer>
            )
        })}
        </>
    );  
};
