import productsData from "../../data/productsData";

import { Carousel } from "../Carousel";
import { ProductCard } from "../ProductCard";

export const ProductsCarousel: React.FC = () => {

    const products = productsData.map(product => {
        return (
            <ProductCard 
                key={product.id}
                category={product.category}
                imgSrc={product.img}
                id={product.id}
                title={product.name}
                desc={product.description}
                price={product.price}
            />
        )
    })

    return (
        <Carousel>
            {products}
        </Carousel>
    );  
};