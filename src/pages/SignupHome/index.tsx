import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonWrapper, HomeContainer, HomeContent } from "./styles";

export const SignupHome: React.FC = () => {

    const navigate = useNavigate();

    return (
        
        <HomeContainer>
            <HomeContent>
                <h1>The shopping destination you need</h1>
                <ButtonWrapper>
                    <Button
                        color='primary'
                        onClick={() => navigate('/signup-phone')}
                    >
                        Get Started
                    </Button>
                    <button className='button'>
                        I already have an account
                    </button>
                </ButtonWrapper>
            </HomeContent>
        </HomeContainer>
    );  
};
