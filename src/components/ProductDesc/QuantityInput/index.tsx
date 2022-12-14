import { useEffect, useState } from "react";
import { BagState } from "../../../context/BagContext";
import { InputContainer, InputWrapper } from "./styles";

interface InputProps {
    label?: string;
    productId: string;
    displayIsNone?: boolean;
    marginBottom?: string;
}

export const QuantityInput : React.FC<InputProps> = ({
    label,
    productId,
    displayIsNone,
    marginBottom
}) => {

    const { bagQuantity, setBagQuantity } = BagState();

    const [quantity, setQuantity] = useState(() => {
        if (bagQuantity[productId]) {
            return bagQuantity[productId];
        }
        return 1;
    });

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handlePlus = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    }

    useEffect(() => {
        if (productId) {
            setBagQuantity({
                ...bagQuantity,
                [productId]: quantity
            });
        }
    }, [quantity]);

    return (
        
        <InputContainer
            displayIsNone={displayIsNone}
            marginBotton={marginBottom}
        >
            {label ? <label>{label}:</label> : null}
            <InputWrapper>
                <button onClick={handleMinus}> 
                    <img src='/assets/img/icons/minus-icon.svg' alt='minus' />
                </button>
                <input 
                    type='number' 
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))} 
                />
                <button onClick={handlePlus}> 
                    <img src='/assets/img/icons/plus-icon.svg' alt='plus' />
                </button>
            </InputWrapper>
        </InputContainer>
    );  
};
