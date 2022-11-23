import { PincodeContainer } from "./styles";

interface PincodeProps {
    placeholder: string;
}

export const PincodeInput: React.FC<PincodeProps> = ({
    placeholder
}) => {

    return (
        <PincodeContainer>
            <input type='text' defaultValue={placeholder}/>
            <button>CHECK</button>
        </PincodeContainer>
    );  
};