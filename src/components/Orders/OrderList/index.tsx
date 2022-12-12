import { OrderItem } from "./OrderItem";
import { GridList, GridWrapper } from "./styles";

interface OrderListProps {
    orders: any;
}

export const OrderList: React.FC<OrderListProps> = ({
    orders
}) => {

    return (
        
        <main>
            <GridWrapper>
                <li>Order ID</li>
                <li>Date</li>
                <li>Price</li>
                <li>Status</li>
            </GridWrapper>
            <GridList>
                {
                    Object.values(orders).map((order: any) => (
                        <OrderItem
                            key={order._id}
                            id={order._id}
                            date={order.date}
                            price={order.totalPrice}
                            status={order.status}
                        />
                    ))
                }
            </GridList>
        </main>
    );  
};