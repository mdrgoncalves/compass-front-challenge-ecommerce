import { PageContainer, PageContent } from "./styles";

export const Page404: React.FC = () => {

    return (

        <PageContainer>
            <PageContent>
                <p>Ops...</p>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p className='desc'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            </PageContent>
        </PageContainer>
    )
};