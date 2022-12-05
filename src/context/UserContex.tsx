import { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../types/Products";
import { api } from "../utils/api";

export const UserContext = createContext({} as any);

const UserProvider = ({ children }: any) => {

    const [userId] = useState('638c11805dab33fd788dde32');
    const [user, setUser] = useState({});
    const [wishlist, setWishlist] = useState({});

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

    return (
        <UserContext.Provider value={{ 
            userId,
            getUser,
            user,
            getWishlist,
            wishlist,
            createOrUpdateWishlist,
            removeProductOfWishlist
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState = () => {
    return useContext(UserContext);
}
export default UserProvider;