import { createContext, useContext, useState } from "react";
import { api } from "../utils/api";

const CouponContext = createContext({} as any);

const CouponProvider = ({ children }: any) => {

    const [coupons, setCoupons] = useState('');
    const [discountPercent, setDiscountPercent] = useState(0);
    const [couponId, setCouponId] = useState('');

    // Get active coupons
    const getCoupons = async () => {
        try {
            const { data } = await api.get("/coupons/active");
            setCoupons(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CouponContext.Provider value={{
            getCoupons,
            coupons,
            setDiscountPercent,
            discountPercent,
            setCouponId,
            couponId
        }}>
            {children}
        </CouponContext.Provider>
    );
}

export const CouponState = () => useContext(CouponContext);
export default CouponProvider;