import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { MobileHeading } from "../../components/Mobile/MobileHeading";
import { UserState } from "../../context/UserContex";
import { InputNumber } from "./InputNumber";
import { ButtonWrapper, InputWrapper, OtpContainer, OtpContent, PhoneMessage } from "./InputNumber/styles";

export const SignupOtp: React.FC = () => {

    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [thirdNumber, setThirdNumber] = useState('');
    const [fourthNumber, setFourthNumber] = useState('');
    const [code, setCode] = useState('');

    const { createUser } = UserState();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const code = firstNumber + secondNumber + thirdNumber + fourthNumber;
        setCode(code);
    }, [firstNumber, secondNumber, thirdNumber, fourthNumber]);

    const clickHandler = () => {
        if (code === '1234') {
            navigate('/profile/information', {replace: true});
            createUser(
                {
                    "mobileNumber": location.state
                }
            );
            alert('Success!');
        } else {
            alert(`Invalid code! \nTry: 8521`);
        }
    };

    return (
        
        <OtpContainer>
            <OtpContent>
                <MobileHeading
                    title='Enter OTP'
                />
                <PhoneMessage>
                    A 4 digit code was sent to your number.
                </PhoneMessage>
                <InputWrapper>
                    <InputNumber
                        setNumber={setFirstNumber}
                        number={firstNumber}
                        placeholder='1'
                    />
                    <InputNumber
                        setNumber={setSecondNumber}
                        number={secondNumber}
                        placeholder='2'
                    />
                    <InputNumber
                        setNumber={setThirdNumber}
                        number={thirdNumber}
                        placeholder='3'
                    />
                    <InputNumber
                        setNumber={setFourthNumber}
                        number={fourthNumber}
                        placeholder='4'
                    />
                </InputWrapper>
            </OtpContent>
            <PhoneMessage>
                Didn’t recieve the code?
                <span> Request again</span>
            </PhoneMessage>
            <ButtonWrapper>
                <Button
                    color='primary'
                    onClick={clickHandler}
                >
                    Verify & Create Account
                </Button>
            </ButtonWrapper>
        </OtpContainer>
    );  
};
