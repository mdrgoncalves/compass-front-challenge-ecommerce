import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserState } from "../../context/UserContex";
import { useWidth } from "../../utils/useWidth";
import { AddressCard } from "../AddressCard";
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
        setAddress(order.address);
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
                                subTotal={order.subTotal}
                                discount={order.discount}
                                deliveryFee={order.deliveryFee}
                                grandTotal={order.grandTotal}
                                fullName={address ? address.fullName : ''}
                                street={address ? address.street : ''}
                                city={address ? address.city : ''}
                                state={address ? address.state : ''}
                                pincode={address ? address.pincode : ''}
                                mobileNumber={address ? address.mobileNumber : ''}
                            />
                        </OrderWrapper>
                    }
                    secondTabChildren={
                        <OrderInformation 
                            subTotal={order.subTotal}
                            discount={order.discount}
                            deliveryFee={order.deliveryFee}
                            grandTotal={order.grandTotal}
                            fullName={address ? address.fullName : ''}
                            street={address ? address.street : ''}
                            city={address ? address.city : ''}
                            state={address ? address.state : ''}
                            pincode={address ? address.pincode : ''}
                            mobileNumber={address ? address.mobileNumber : ''}
                        />
                    }
                    thirdTabChildren={
                        <>
                        <h2>Order Sent to:</h2>
                        <AddressCard
                            fullName={address ? address.fullName : ''}
                            street={address ? address.street : ''}
                            city={address ? address.city : ''}
                            state={address ? address.state : ''}
                            pincode={address ? address.pincode : ''}
                            mobileNumber={address ? address.mobileNumber : ''}
                            withTitle={false}
                            withBorder={false}
                        />
                        </>
                    }
                />
                </>
            ),
        })}
        </>
    );  
};