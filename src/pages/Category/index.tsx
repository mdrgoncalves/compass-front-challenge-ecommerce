import { CategoryHeader } from "../../components/Desktop/CategoryDesktopHeader";
import { CategoryFilter } from "../../components/Desktop/CategoryFilter";
import { ProductListing } from "../../components/ProductListing";
import { PromoImageDesktop } from "../../components/PromoBanner/styles";
import { CategoryContainer } from "./styles";

export const Category: React.FC = () => {
    
    return (
        <CategoryContainer>
            <div className='category__banner'>
                <PromoImageDesktop 
                    src='/assets/img/icons/black-friday-hero.png' 
                    alt='black friday banner' 
                />
            </div>
            <div className='category__header'>
                <CategoryHeader />  
            </div>
            <aside className='category__filter'>
                <CategoryFilter />
            </aside>
            <section className='category__products'>
                <ProductListing />
            </section>
        </CategoryContainer>
    )
};
