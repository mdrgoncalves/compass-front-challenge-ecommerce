import { createContext, useContext, useReducer, useState } from 'react';
import { BagReducer } from './BagReducer';

const BagContext = createContext({} as any);

const BagProvider = ({ children }: any) => {

    //Load bag of local storage in page load
    const [bag, setBag] = useState(() => {
        const localData = localStorage.getItem('bag');
        return localData ? JSON.parse(localData) : [];
    });

    const [state, dispatch] = useReducer(BagReducer, {
        bag
    });

    const [bagQuantity, setBagQuantity] = useState({})

    return (
        <BagContext.Provider value={{ state, dispatch, bagQuantity, setBagQuantity }}>
            {children}
        </BagContext.Provider>
    );
}

export const BagState = () => {
    return useContext(BagContext);
}
export default BagProvider;
