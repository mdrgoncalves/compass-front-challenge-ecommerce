import { Link, useParams } from "react-router-dom";
import { HeaderContainer, TitleContainer } from "./styles";

interface CategoryMobileHeaderProps {
    totalProducts: number;
}

export const CategoryMobileHeader: React.FC<CategoryMobileHeaderProps> = ({
    totalProducts
}) => {

    const { category } = useParams<{ category: string }>();

    return (
        
        <HeaderContainer>
            <TitleContainer>
                <Link to='/'>
                    <img src='/assets/img/icons/leading-icon.svg' alt='back icon' />
                </Link>
                <h1>{category}</h1>
            </TitleContainer>
            <h2>{totalProducts} Products</h2>
        </HeaderContainer>
    );  
};