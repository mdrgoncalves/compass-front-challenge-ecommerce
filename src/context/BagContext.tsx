import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { BagReducer } from './BagReducer';
import { CouponState } from './CouponContext';

const BagContext = createContext({} as any);

const BagProvider = ({ children }: any) => {

    const { discountPercent } = CouponState();

    // Load bag of local storage in page load
    const [bag] = useState(() => {
        const localData = localStorage.getItem('bag');
        return localData ? JSON.parse(localData) : [];
    });

    const [state, dispatch] = useReducer(BagReducer, {
        bag
    });

    const [bagQuantity, setBagQuantity] = useState({})

    // Calculate bag total 
    const [subTotal, setSubTotal] = useState(0);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const subTotal = Number(bag.reduce((acc: number, item: any) => acc + (item.productPrice * item.productQuantity), 0));
        setSubTotal(subTotal);
        const discount = Number((subTotal * discountPercent) / 100);
        setDiscount(discount);
        const itemQuantity = Number(bag.reduce((acc: number, item: any) => acc + item.productQuantity, 0));
        setItemQuantity(itemQuantity);
        const grandTotal = subTotal + itemQuantity - discount;
        setGrandTotal(grandTotal);
    }, [bagQuantity, discountPercent]);

    return (
        <BagContext.Provider value={{ 
            state, 
            dispatch, 
            bagQuantity, 
            setBagQuantity, 
            subTotal,
            itemQuantity,
            grandTotal,
            discount
        }}>
            {children}
        </BagContext.Provider>
    );
}

export const BagState = () => {
    return useContext(BagContext);
}
export default BagProvider;
