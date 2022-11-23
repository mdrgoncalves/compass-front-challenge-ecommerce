import { NavLink } from "react-router-dom"

import { Carousel } from "../Carousel"
import { PromoCard } from "./PromoCard"

import { useWidth } from "../../utils/useWidth"

import { PromoImageDesktop, CarouselMobileContainer } from './styles';

export const PromoBanner: React.FC = () => {

    return (
        <>
            {useWidth({
                renderMobile: () => (
                    <CarouselMobileContainer>
                        <Carousel>
                            <PromoCard imgSrc='/assets/img/funk-banner.png' imgAlt='funk promotion banner' />
                            <PromoCard imgSrc='/assets/img/spring-banner.png' imgAlt='spring promotion banner' />,
                        </Carousel>
                    </CarouselMobileContainer>
                ),
                renderDesktop: () => (
                    <NavLink to='/category/handbags'>
                        <PromoImageDesktop src='/assets/img/funk-banner-desktop.png' alt='funk promotion banner' />
                    </NavLink>
                )
            })}
        </>
    )
}