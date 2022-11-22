import { ProductsCarousel } from "../../ProductsCarousel";
import { TrendingContainer } from "./styles";

export const TrendingCarousel: React.FC = () => {

    return (
        <TrendingContainer>
            <h2>You Might Also Like</h2>
            <ProductsCarousel />
        </TrendingContainer>
    );  
};