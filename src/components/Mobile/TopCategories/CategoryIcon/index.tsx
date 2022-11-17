import { CategoryLink } from "./styles";

interface CategoryLinkProps {
    category: 'handbags' | 'watches' | 'skincare' | 'jewellery' | 'apparels';
}

export const CategoryIcon: React.FC<CategoryLinkProps> = ({
    category
}) => {

    return (
        <CategoryLink to={`/${category}`}>
            <img src={`/assets/img/icons/${category}-icon.svg`} alt={`${category} icon`} />
            <h3>{category}</h3>
        </CategoryLink>
    );  
};