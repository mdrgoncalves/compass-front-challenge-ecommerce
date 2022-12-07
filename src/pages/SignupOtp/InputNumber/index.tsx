import { Input } from "./styles";

interface InputNumberProps {
    setNumber: React.Dispatch<React.SetStateAction<string>>;
    number: string;
    placeholder?: string;
}

export const InputNumber: React.FC<InputNumberProps> = ({
    setNumber,
    number,
    placeholder
}) => {

    return (
        
        <Input
            type='text'
            minLength={1}
            maxLength={1}
            placeholder={placeholder}
            value={number}
            onChange={(event) => {
                const value = event.target.value;
                const maskedValue = value
                    .replace(/\D/g, '')
                    .replace(/(\d{1})/, '$1');
                event.target.value = maskedValue;
                setNumber(maskedValue);
            }}
        />
    );  
};
