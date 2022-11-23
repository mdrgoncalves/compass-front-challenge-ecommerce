import { createContext, useContext, useReducer } from 'react';
import { BagReducer } from './BagReducer';

const BagContext = createContext({} as any);

const BagProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(BagReducer, {
        bag: []
    });

    return (
        <BagContext.Provider value={{ state, dispatch }}>
            {children}
        </BagContext.Provider>
    );
}

export const BagState = () => {
    return useContext(BagContext);
}
export default BagProvider;
