import { PincodeInput } from "./PincodeInput";
import { DeliveryContainer, DeliveryText } from "./styles";

export const DeliveryDetails: React.FC = () => {

    return (
        
        <DeliveryContainer>
            <DeliveryText>
                <p className='title'>Delivery Details</p>
                <p className='desc'>Check estimated delivery date/pickup option.</p>
            </DeliveryText>
            <PincodeInput 
                placeholder='Apply Valid Pincode'
            />
        </DeliveryContainer>
    );  
};