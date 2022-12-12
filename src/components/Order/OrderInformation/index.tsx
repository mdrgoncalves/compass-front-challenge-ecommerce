import { AddressCard } from "../../AddressCard";
import { OrderSection, ColumnFlex, FlexWrapper, OrderDetails } from "./styles";

interface OrderInformationProps {
    subTotal: number;
    discount: number;
    deliveryFee: number;
    grandTotal: number;
    fullName: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    mobileNumber: string;
}

export const OrderInformation: React.FC<OrderInformationProps> = ({
    subTotal = 0,
    discount = 0,
    deliveryFee = 0,
    grandTotal = 0,
    fullName,
    street,
    city ,
    state,
    pincode,
    mobileNumber,
}) => {

    return (
        
        <OrderSection>
            <h2>Order Information</h2>
            <FlexWrapper>
                <OrderDetails>
                    <h3>Order Details</h3>
                    <FlexWrapper>
                        <p>Sub Total</p>
                        <p>${subTotal.toFixed(2)}</p>
                    </FlexWrapper>
                    <FlexWrapper>
                        <p>Discount</p>
                        <p>${discount.toFixed(2)}</p>
                    </FlexWrapper>
                    <FlexWrapper>
                        <p>Delivery Fee</p>
                        <p>${deliveryFee.toFixed(2)}</p>
                    </FlexWrapper>
                    <FlexWrapper>
                        <p>Grand Total</p>
                        <p>${grandTotal.toFixed(2)}</p>
                    </FlexWrapper>
                </OrderDetails>
                <ColumnFlex>
                    <h3>Payment Details</h3>
                    <p>Credit Card</p>
                </ColumnFlex>
                <AddressCard
                    fullName={fullName}
                    street={street}
                    city={city}
                    state={state}
                    pincode={pincode}
                    mobileNumber={mobileNumber}
                />
            </FlexWrapper>
        </OrderSection>
    );  
};