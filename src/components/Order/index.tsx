import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductState } from "../../context/ProductContext";
import { UserState } from "../../context/UserContex";
import { useWidth } from "../../utils/useWidth";
import { BagDisplay } from "../BagDisplay";
import { ProductTabs } from "../Desktop/ProductTabs";
import { OrderInformation } from "./OrderInformation";
import { OrderWrapper, ProductList } from "./styles";

export const Order: React.FC = () => {

    const { getOrderById, order } = UserState();
    const { orderId } = useParams();

    const [productsList, setProductsList] = useState<any>([]);
    const [address, setAddress] = useState<any>({});

    useEffect(() => {
        getOrderById(orderId);
        const orderList = order.orderItems;
        setAddress(address);
        if (orderList) {
            const productList = orderList.map((item: any) => {
                const product = {
                    _id: item.product._id,
                    productName: item.product.productName,
                    productDescription: item.product.productDescription,
                    productPrice: item.price,
                    productQuantity: item.quantity,
                    productImage: item.product.productImage,
                };
                return product;
            });
            setProductsList(productList);
        }
    }, [order]);

    
    useEffect(() => {
        setAddress(order.address);
    }, []);
    

    return (
        
        <>
        {useWidth({
            renderMobile: () => (
                <>
                </>
            ),
            renderDesktop: () => (
                <>
                <ProductTabs 
                    firstTabName='Items Ordered'
                    secondTabName='Invoices'
                    thirdTabName='Order Shipment'
                    firstTabChildren={
                        <OrderWrapper>
                            <ProductList>
                                <BagDisplay 
                                    productsList={productsList} 
                                    withButtons={false}
                                />
                            </ProductList>
                            <OrderInformation 
                                subTotal={order.totalPrice}
                                discount={0}
                                deliveryFee={0}
                                grandTotal={0}
                                fullName={address.fullName}
                                street={address.street}
                                city={address.city}
                                state={address.state}
                                pincode={address.pincode}
                                mobileNumber={address.mobileNumber}
                            />
                        </OrderWrapper>
                    }
                    secondTabChildren={<h2>Invoices</h2>}
                    thirdTabChildren={<h2>Order Shipment</h2>}
                />
                </>
            ),
        })}
        </>
    );  
};