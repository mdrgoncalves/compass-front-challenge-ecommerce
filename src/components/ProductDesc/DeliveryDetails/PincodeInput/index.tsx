import { PincodeContainer } from "./styles";

export const PincodeInput: React.FC = () => {

    return (
        <PincodeContainer>
            <input type='text' defaultValue='Apply Valid Pincode'/>
            <button>CHECK</button>
        </PincodeContainer>
    );  
};