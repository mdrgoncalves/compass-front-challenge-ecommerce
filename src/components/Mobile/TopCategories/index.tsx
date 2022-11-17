import { Carousel } from "../../Carousel";
import { Heading } from "../../Heading";

import { useWidth } from "../../../utils/useWidth";
import { CategoryIcon } from "./CategoryIcon";
import { CategoriesSection } from "./styles";

export const TopCategories: React.FC = () => {

    const categories: any[] = ['handbags', 'watches', 'skincare', 'jewellery', 'apparels'];

    return (
        <>
        {useWidth({
            renderMobile: () => (
                <CategoriesSection>
                    <Heading screenType="mobile">
                        Top Categories
                    </Heading>
                    <Carousel>
                        {categories.map((category, index) => (
                            <CategoryIcon key={index} category={category} />
                        ))}
                    </Carousel>
                </CategoriesSection>
            ),
            renderDesktop: () => (
                null
            )
        })}
        </>
    );  
};