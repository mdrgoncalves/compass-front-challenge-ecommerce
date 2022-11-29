import { PathPage } from "../../PathPage";
import { PageTitle } from "../PageTitle";
import { PathWrapper, TitleWrapper } from "./styles";

interface PageHeaderProps {
    title: string;
    paths: string[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    paths
}) => {

    return (

        <div>
            <PathWrapper>
                <PathPage
                    paths={paths}
                />
            </PathWrapper>
            <TitleWrapper>
                <PageTitle title={title} />
            </TitleWrapper>
        </div>
    );  
};