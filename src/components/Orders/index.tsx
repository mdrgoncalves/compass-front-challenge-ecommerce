import { useEffect, useState } from "react";
import { UserState } from "../../context/UserContex";
import { ProductTabs } from "../Desktop/ProductTabs";
import { OrderList } from "./OrderList";

export const Orders: React.FC = () => {

    const { listOrdersByStatus, orders } = UserState();
    const [currentActiveTab, setCurrentActiveTab] = useState('');

    useEffect(() => {
        listOrdersByStatus('paid');
    }, []);

    useEffect(() => {
        if (currentActiveTab === 'tab1') {
            listOrdersByStatus('paid');
        } else if (currentActiveTab === 'tab2') {
            listOrdersByStatus('processing');
        } else if (currentActiveTab === 'tab3') {
            listOrdersByStatus('cancelled');
        }
    }, [currentActiveTab, orders]);

    return (
        
        <ProductTabs isNone
            firstTabName='Completed'
            secondTabName='Processing'
            thirdTabName='Cancelled'
            firstTabChildren={<OrderList orders={orders} />}
            secondTabChildren={<OrderList orders={orders} />}
            thirdTabChildren={<OrderList orders={orders} />}
            setCurrentActiveTab = {setCurrentActiveTab} 
        />
    );  
};