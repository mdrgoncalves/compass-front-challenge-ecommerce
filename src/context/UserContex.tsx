import mongoose from "mongoose";
import { createContext, useContext, useState } from "react";
import { api } from "../utils/api";

export const UserContext = createContext({} as any);

const UserProvider = ({ children }: any) => {

    const [userId, setUserId] = useState(
        localStorage.getItem('userId') ? localStorage.getItem('userId') : '638c11805dab33fd788dde32'
    );
    const [user, setUser] = useState({});
    const [wishlist, setWishlist] = useState({});
    const [orders, setOrders] = useState({});
    const [order, setOrder] = useState({});
    const [address, setAddress] = useState({});
    const [payment, setPayment] = useState({});

    const userIdHandler = (userId: string) => {
        localStorage.setItem('userId', userId);
        setUserId(userId);
    } 

    // Create User
    const createUser = async (body: any) => {

        const id = new mongoose.Types.ObjectId();
        userIdHandler(id.toString())
        
        try {
            await api.post(`/users`, 
                {
                    "_id": id,
                    "mobileNumber": body.mobileNumber,
                    "password": "admin"
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    // Update User
    const updateUser = async (body: any) => {

        try {
            await api.put(`/users/${userId}`, body);
        } catch (error: any) {
            if (error.response.status === 413) {
                alert('Image size is too large');
            }
        }
    }

    // Get User by ID
    const getUser = async () => {
        
        try {
            const { data } = await api.get(`/users/${userId}`);
            setUser(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Get Wishlist by User
    const getWishlist = async () => {

        try {
            const { data } = await api.get(`/wishlist/${userId}`);
            setWishlist(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Create or Update Wishlist
    const createOrUpdateWishlist = async (productId: string) => {

        getWishlist();

        if (Object.keys(wishlist).length === 0) {
            const body = {
                "products": [productId]
            }

            try {
                const { data } = await api.post(`/wishlist/${userId}`, body);
                setWishlist(data);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const { data } = await api.put(`/wishlist/${userId}/${productId}`);
                setWishlist(data);
            } catch (error) {
                console.error(error);
            }
        }
    }

    // Remove product of Wishlist
    const removeProductOfWishlist = async (productId: string) => {

        try {
            const { data } = await api.delete(`/wishlist/${userId}/${productId}`);
            setWishlist(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Create Address 
    const createAddress = async (body: any) => {

        try {
            await api.post(`/address`, body);
        } catch (error) {
            console.error(error);
        }
    }

    // Get Address by User
    const getAddressByUser = async () => {

        try {
            const { data } = await api.get(`/address/user/${userId}`);
            setAddress(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Create Payment
    const createPayment = async (body: any) => {

        try {
            await api.post(`/payments`, body);
        } catch (error) {
            console.error(error);
        }
    }

    // Get Payment by User
    const getPaymentByUser = async () => {

        try {
            const { data } = await api.get(`/payments/user/${userId}`);
            setPayment(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Create Order
    const createOrder = async (body: any) => {

        try {
            await api.post(`/orders`, body);
        } catch (error) {
            console.error(error);
        }
    }

    // List Order by Status
    const listOrdersByStatus = async (status: string) => {

        try {
            const { data } = await api.get(`/orders/user/${userId}/${status}`);
            setOrders(data);
        } catch (error) {
            console.error(error);
        }
    }

    // List Order by ID
    const getOrderById = async (orderId: string) => {

        try {
            const { data } = await api.get(`/orders/${orderId}`);
            setOrder(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Update Order
    const updateOrder = async (orderId: string, body: any) => {

        try {
            await api.put(`/orders/${orderId}`, body);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UserContext.Provider value={{ 
            createUser,
            updateUser,
            userId,
            getUser,
            user,
            getWishlist,
            wishlist,
            createOrUpdateWishlist,
            removeProductOfWishlist,
            createAddress,
            getAddressByUser,
            address,
            createPayment,
            getPaymentByUser,
            payment,
            createOrder,
            listOrdersByStatus,
            orders,
            getOrderById,
            order,
            updateOrder
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState = () => {
    return useContext(UserContext);
}
export default UserProvider;