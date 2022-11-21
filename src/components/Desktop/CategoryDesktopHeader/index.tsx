import { useParams } from "react-router-dom";
import { CategoryHeaderContainer, PathCategory } from "./styles";

export const CategoryHeader: React.FC = () => {

    const { category } = useParams<{ category: string }>();

    const categoryTitle = category!.charAt(0).toUpperCase() + category!.slice(1);

    return (
        <CategoryHeaderContainer>
            <PathCategory>
                <span className='category-previous'>Home</span>
                <img src='/assets/img/icons/chevron-right-small-icon.png' alt='right chevron' />
                <span className='category-current'>{categoryTitle}</span>
            </PathCategory>
            <h1>{categoryTitle}</h1>
        </CategoryHeaderContainer>
    );  
};