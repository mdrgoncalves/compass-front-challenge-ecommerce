import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/Mobile/BackButton";
import { BackContainer, PageContainer, PageContent } from "./styles";

export const Page404: React.FC = () => {

    const navigate = useNavigate();

    return (

        <PageContainer>
            <PageContent>
                <p>Ops...</p>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p className='desc'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <BackContainer>
                    <BackButton />
                    <span onClick={() => navigate('/home')}>Back to Home</span>
                </BackContainer>
            </PageContent>
        </PageContainer>
    )
};