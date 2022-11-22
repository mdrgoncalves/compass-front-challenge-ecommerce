import { useState } from "react";
import { InputContainer, InputWrapper } from "./styles";

export const QuantityInput : React.FC = () => {

    const [quantity, setQuantity] = useState(1);

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

    return (
        
        <InputContainer>
            <label>Quantity:</label>
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