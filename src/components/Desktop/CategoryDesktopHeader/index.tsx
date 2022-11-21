import { useParams } from "react-router-dom";
import { PathPage } from "../../PathPage";
import { CategoryHeaderContainer } from "./styles";

export const CategoryHeader: React.FC = () => {

    const { category } = useParams<{ category: string }>();
    const categoryTitle = category!.charAt(0).toUpperCase() + category!.slice(1);

    return (
        <CategoryHeaderContainer>
            <PathPage
                paths={[`${categoryTitle}`]}
            />
            <h1>{categoryTitle}</h1>
        </CategoryHeaderContainer>
    );  
};