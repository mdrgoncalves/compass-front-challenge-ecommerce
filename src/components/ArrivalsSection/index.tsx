import { Link } from "react-router-dom"

import { ArrivalsContainer, ArrivalsContent } from "./style";
import { useWidth } from "../../utils/useWidth";
import { ProductsCarousel } from "../ProductsCarousel";

export const ArrivalsSection = () => {
    
    return (
        <ArrivalsContainer>
            <ArrivalsContent>
                <h2>New Arrivals</h2>
                <Link to='/'>
                    View All
                    {useWidth({
                        renderMobile: () => (
                            <img src='/assets/img/chevron-right-icon-small.svg' alt='view all' />
                        ),
                        renderDesktop: () => (
                            <img src='/assets/img/chevron-right-icon.svg' alt='view all' />
                        )
                    })}
                </Link>
            </ArrivalsContent>
            <ProductsCarousel />
        </ArrivalsContainer>
    )
}