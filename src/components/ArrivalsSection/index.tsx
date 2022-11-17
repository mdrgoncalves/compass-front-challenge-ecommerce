import productsData from "../../data/productsData";

import { Link } from "react-router-dom"

import { ProductCard } from "../ProductCard";
import { Carousel } from "../Carousel";
import { ArrivalsContainer, ArrivalsContent } from "./style";
import { useWidth } from "../../utils/useWidth";

export const ArrivalsSection = () => {

    const products = productsData.map(product => {
        return (
            <ProductCard 
                key={product.id}
                imgSrc={product.img}
                id={product.id}
                title={product.name}
                desc={product.description}
                price={product.price}
            />
        )
    })
    
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
            <Carousel>
                {products}
            </Carousel>
        </ArrivalsContainer>
    )
}