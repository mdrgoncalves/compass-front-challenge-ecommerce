import { createContext, useContext, useReducer, useState } from 'react';
import { BagReducer } from './BagReducer';

const BagContext = createContext({} as any);

const BagProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(BagReducer, {
        bag: []
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
