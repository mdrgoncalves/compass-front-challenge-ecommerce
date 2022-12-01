import { ProductState } from "../../context/ProductContext";
import { IProduct } from "../../types/Products";
import { Carousel } from "../Carousel";
import { ProductCard } from "../ProductCard";

export const ProductsCarousel: React.FC = () => {

    const { products } = ProductState();

    const productsList = products.map((product: IProduct) => {
        return (
            <ProductCard 
                key={product._id}
                category={product.productCategory}
                imgSrc={product.productImage}
                id={product._id}
                title={product.productName}
                desc={product.productDescription}
                price={product.productPrice}
            />
        )
    })

    return (
        <Carousel>
            {productsList}
        </Carousel>
    );  
};