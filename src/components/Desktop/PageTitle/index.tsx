import { Title } from "./styles";

interface PageTitleProps {
    title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
    title
}) => {

    return (
        <Title>{title}</Title>
    );  
};