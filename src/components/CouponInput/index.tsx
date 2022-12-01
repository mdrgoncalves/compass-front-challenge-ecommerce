import { useEffect, useState } from "react";
import { BagState } from "../../context/BagContext";
import { CouponState } from "../../context/CouponContext";
import { ICoupon } from "../../types/Coupons";
import { Message, PincodeContainer } from "./styles";

interface CouponInputProps {
    placeholder: string;
}

export const CouponInput: React.FC<CouponInputProps> = ({
    placeholder
}) => {

    const { subTotal } = BagState();
    const { setDiscountPercent, setCouponId } = CouponState();

    // Get active coupons
    const { getCoupons, coupons } = CouponState();

    useEffect(() => {
        getCoupons();
    }, []);

    // Set pincode
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    // Check pincode
    const checkPincode = () => {
        const pincodeExists: ICoupon = coupons.find((coupon: ICoupon) => coupon.code === code);
        const bagTotal = subTotal;

        if (!pincodeExists) {
            return setMessage('* Coupon does not exist!')
        }
        
        if (bagTotal > pincodeExists.priceMinimum) {
            setDiscountPercent(pincodeExists.discount);
            setCouponId(pincodeExists._id);
            setMessage('* Coupon is active!')
        } else {
            return setMessage('* The coupon does not reach the minimum value!')
        }
    }

    return (
        <>
        <PincodeContainer>
            <input 
                type='text'
                placeholder={placeholder}
                value={code}
                onChange={e => setCode(e.target.value)}
            />
            <button
                onClick={() => checkPincode()}
            >
                CHECK
            </button>
        </PincodeContainer>
        <Message>{message}</Message>
        </>
    );  
};