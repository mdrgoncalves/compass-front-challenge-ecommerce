import { createContext, useContext, useState } from "react";
import { api } from "../utils/api";

export const UserContext = createContext({} as any);

const UserProvider = ({ children }: any) => {

    const [userId] = useState('638c11805dab33fd788dde32');
    const [user, setUser] = useState({});

    // Get User by ID
    const getUser = async () => {
        
        try {
            const { data } = await api.get(`/users/${userId}`);
            setUser(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UserContext.Provider value={{ 
            userId,
            getUser,
            user
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState = () => {
    return useContext(UserContext);
}
export default UserProvider;