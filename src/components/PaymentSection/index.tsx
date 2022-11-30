import { useEffect, useState } from "react";
import { PaymentWrapper, PaymentOption, CardPaymentWrapper } from "./styles";

interface PaymentSectionProps {
    setCardNumberState: (value: number) => void;
    setCardDateState: (value: string) => void;
    setCardCvvState: (value: number) => void;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({
    setCardNumberState,
    setCardDateState,
    setCardCvvState
}) => {

    const [activePayment, setActivePayment] = useState('tab2');
    const [cardNumber, setCardNumber] = useState(0);
    const [cardDate, setCardDate] = useState('');
    const [cardCvv, setCardCvv] = useState(0);

    const handleTabClick = (tab: string) => {
        setActivePayment(tab);
    }

    useEffect(() => {
        setCardNumberState(cardNumber);
        setCardDateState(cardDate);
        setCardCvvState(cardCvv);
    }, [cardNumber, cardDate, cardCvv]);

    return (
        
        <>
        <PaymentWrapper>
            <PaymentOption 
                htmlFor="upi"
                className={activePayment === 'tab1' ? 'active' : ''}
                onClick={() => handleTabClick('tab1')}
            >
                <input 
                    type="radio"
                    id="upi" 
                    name="payment"
                />
                <img src='/assets/img/icons/upi-logo.png' alt='upi logo' />
                <span>UPI</span>
            </PaymentOption>
            <PaymentOption 
                htmlFor="card"
                className={activePayment === 'tab2' ? 'active' : ''}
                onClick={() => handleTabClick('tab2')}
            >
                <input 
                    type="radio"
                    id="card" 
                    name="payment"
                    defaultChecked
                />
                <img src='/assets/img/icons/card-icon.png' alt='card logo' className='card-img'/>
                <span>Credit/Debit Card</span>
            </PaymentOption>
            <PaymentOption 
                htmlFor="apple"
                className={activePayment === 'tab3' ? 'active' : ''}
                onClick={() => handleTabClick('tab3')}
            >
                <input 
                    type="radio"
                    id="apple" 
                    name="payment"
                />
                <img src='/assets/img/icons/apple-pay-logo.png' alt='apple pay logo' />
                <span>Apple Pay</span>
            </PaymentOption>
            <PaymentOption 
                htmlFor="amazon"
                className={activePayment === 'tab4' ? 'active' : ''}
                onClick={() => handleTabClick('tab4')}
            >
                <input 
                    type="radio"
                    id="amazon" 
                    name="payment"
                />
                <img src='/assets/img/icons/amazonpay-logo.png' alt='amazon pay logo' />
                <span>Amazon Pay</span>
            </PaymentOption>
        </PaymentWrapper>
        <CardPaymentWrapper>
            <input 
                type="text" 
                placeholder='Enter Card Number'
                minLength={16}
                maxLength={16}
                onChange={(event) => {
                    const value = event.target.value;
                    const maskedValue = value
                        .replace(/\D/g, '')
                        .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
                    event.target.value = maskedValue;
                    setCardNumber(Number(value));
                }}
            />
            <input 
                type="text"
                placeholder='Enter Card Due Date' 
                minLength={6}
                maxLength={6}
                onChange={(event) => {
                    const value = event.target.value;
                    const maskedValue = value
                        .replace(/\D/g, '')
                        .replace(/(\d{2})(\d{4})/, '$1/$2');
                    event.target.value = maskedValue;
                    setCardDate(maskedValue);
                }}
            />
            <input 
                type="text" 
                placeholder='Enter CVV'
                minLength={3}
                maxLength={3}
                onChange={(event) => {
                    const value = event.target.value;
                    const maskedValue = value
                        .replace(/\D/g, '');
                    event.target.value = maskedValue;
                    setCardCvv(Number(maskedValue));
                }}
            />
        </CardPaymentWrapper>
        </>
    );  
};