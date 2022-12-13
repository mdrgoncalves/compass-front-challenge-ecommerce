import { useEffect } from "react";
import { UserState } from "../../context/UserContex";
import { CardItem } from "./styles";

interface IPayment {
    _id: string;
    cardNumber: string;
    expirationDate: string;
    cvc: string;
    finalNumbers: string;
    user: string;
}

export const SavedCards: React.FC = () => {

    const { getPaymentByUser, payment } = UserState();

    useEffect(() => {
        getPaymentByUser();
    }, []);
    
    return (
        
        <>
        {Object.keys(payment).map((key) => {
                return (
                    <CardItem key={payment[key]._id}>
                        <h2>Card {Number(key) + 1}</h2>
                        <p>Card: **** **** **** **{payment[key].finalNumbers}</p>
                        <p>Expiration Date: {payment[key].expirationDate}</p>
                    </CardItem>
                )
            })}
        </>
    );  
};
