import { PathPage } from "../../PathPage";
import { PageTitle } from "../PageTitle";
import { PathWrapper, TitleWrapper } from "./styles";

interface PageHeaderProps {
    title: string;
    paths: string[];
    titleMargin?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    paths,
    titleMargin
}) => {

    return (

        <div>
            <PathWrapper>
                <PathPage
                    paths={paths}
                />
            </PathWrapper>
            <TitleWrapper
                titleMargin={titleMargin}
            >
                <PageTitle title={title} />
            </TitleWrapper>
        </div>
    );  
};