import { useEffect } from "react";
import { UserState } from "../../context/UserContex";
import { EmptyText } from "../Reviews/styles";
import { CardItem, CardWrapper } from "./styles";

export const SavedCards: React.FC = () => {

    const { getPaymentByUser, payment } = UserState();

    useEffect(() => {
        getPaymentByUser();
    }, []);
    
    return (
        
        <>
            {(payment?.lenght === 0) ? (
            <CardWrapper>
            {Object.keys(payment).map((key) => {
                    return (
                        <CardItem key={payment[key]._id}>
                            <h2>Card {Number(key) + 1}</h2>
                            <p>Card: **** **** **** **{payment[key].finalNumbers}</p>
                            <p>Expiration Date: {payment[key].expirationDate}</p>
                        </CardItem>
                    )
                })}
            </CardWrapper>
            ) : (
                <EmptyText>You haven't added any cards yet.</EmptyText>
            )}
        </>
    );  
};
