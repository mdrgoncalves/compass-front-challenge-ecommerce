import { CategoryFilter } from "../../components/Desktop/CategoryFilter";
import { PromoImageDesktop } from "../../components/PromoBanner/styles";

export const Category: React.FC = () => {
    
    return (
        <>
            <div>
                <PromoImageDesktop 
                    src='/assets/img/icons/black-friday-hero.png' 
                    alt='black friday banner' 
                />
            </div>
            <CategoryFilter />
        </>
    )
};
