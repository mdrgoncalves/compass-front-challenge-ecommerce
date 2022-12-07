import { DddInput, PhoneInput, InputsWrapper } from "./styles";

interface InputPhone {
    setDdd: React.Dispatch<React.SetStateAction<string>>,
    setPhone: React.Dispatch<React.SetStateAction<string>>
    ddd: string,
    phone: string
}

export const InputPhone: React.FC<InputPhone> = ({
    setDdd,
    setPhone,
    ddd,
    phone
}) => {

    return (
        
        <InputsWrapper>
            <DddInput 
                type="text" 
                placeholder='+11'
                maxLength={4}
                minLength={2}
                value={ddd}
                onChange={(event) => {
                    const value = event.target.value;
                    const maskedValue = value
                        .replace(/\D/g, '')
                        .replace(/(\d{1})/, '+$1');
                    event.target.value = maskedValue;
                    setDdd(maskedValue);
                }}
            />
            <PhoneInput 
                type="text" 
                placeholder='0986757684968'
                maxLength={13}
                minLength={13}
                value={phone}
                onChange={(event) => {
                    const value = event.target.value;
                    const maskedValue = value
                        .replace(/\D/g, '')
                        .replace(/(\d{4})(\d{5})(\d{4})/, '($1) $2-$3');
                    event.target.value = maskedValue;
                    setPhone(maskedValue);
                }}
            />
        </InputsWrapper>
    );  
};
