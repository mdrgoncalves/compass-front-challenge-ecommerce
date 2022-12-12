import { useEffect, useState } from "react";
import { UserState } from "../../../../context/UserContex";
import { Button } from "../../../Button";
import { 
    GridItem, 
    DateText, 
    ChevronRight, 
    PriceText, 
    StatusText,  
    ButtonWrapper
} from "./styles";

interface OrderItemProps {
    id: string;
    date: string;
    price: number;
    status: string;
}

export const OrderItem: React.FC<OrderItemProps> = ({
    id,
    date,
    price,
    status
}) => {

    const { updateOrder } = UserState();

    const [isChecked, setIsChecked] = useState(false);

    const orderId = id.slice(0, 9);
    const orderPrice = price.toFixed(2);

    const orderDate =  
        new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

    const updateHandler = (status: string) => {

        const data = {
            "status": status
        }

        updateOrder(id, data);
    }

    return (

        <GridItem>
            <div>
                <input 
                    type='checkbox'
                    id='checkbox'
                    name='checkbox'
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor=''>#{orderId}</label>
            </div>
            <DateText>{orderDate}</DateText>
            <PriceText>${orderPrice}</PriceText>
            <StatusText>{status}</StatusText>
            <ChevronRight to={`${id}`}>
                <img
                    src='/assets/img/chevron-right-icon.svg' 
                    alt='right chevron' 
                />
            </ChevronRight>
            {isChecked ? (
                <ButtonWrapper>
                    <Button
                        color='secondary'
                        onClick={() => updateHandler('processing')}
                    >
                        Processing
                    </Button>
                    <Button
                        color='remove'
                        onClick={() => updateHandler('cancelled')}
                    >
                        Cancelled
                    </Button>
                </ButtonWrapper>
            ) : null}
        </GridItem>
    );  
};