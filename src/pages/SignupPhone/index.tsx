import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputPhone } from "../../components/InputPhone";
import { MobileHeading } from "../../components/Mobile/MobileHeading";
import { PhoneContainer, PhoneContent, PhoneMessage } from "./styles";

export const SignupPhone: React.FC = () => {

    const [ddd, setDdd] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setPhoneNumber(
            (ddd + phone).replace(/[\s()+-]|ext/gi, '')
        );
    }, [ddd, phone]);

    const clickHandler = () => {

        if (phoneNumber === '110986757684968') {
            navigate('/signup-otp', { state: phoneNumber });
        } else {
            alert(`Invalid phone number! \nTry: 11 0986757684968`);
        }
    };

    return (
        
        <PhoneContainer>
            <MobileHeading 
                title='Enter your phone number'
            />
            <PhoneContent>
                <InputPhone
                    setDdd={setDdd}
                    setPhone={setPhone}
                    ddd={ddd}
                    phone={phone}
                />
                <PhoneMessage>
                    A 4 digit code will be sent to this number.
                </PhoneMessage>
            </PhoneContent>
            <Button
                color='primary'
                onClick={clickHandler}
            >
                Next
            </Button>
        </PhoneContainer>
    );  
};
