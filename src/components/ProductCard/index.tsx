import { Link } from "react-router-dom";
import productsData from "../../data/productsData";

import { IconButton } from "../IconButton"

import { 
    ProductContainer, 
    ProductContent,
    ProductPicture,
    ProductText,
    ProductTitle, 
    ProductDesc,
    ProductPrice
} from "./styles"

interface ProductCardProps {
    imgSrc: string;
    id: number;
    title: string;
    desc: string;
    price: string;
}

export const ProductCard = ({
    imgSrc,
    id,
    title,
    desc,
    price
}: ProductCardProps) => {
    
    return (
        <ProductContainer>
            <ProductPicture>
                <Link to={`/products/${id}`}>
                    <img src={imgSrc} alt={`${title} product`} />
                </Link>
            </ProductPicture>
            <ProductContent>
                <ProductText>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductDesc>{desc}</ProductDesc>
                    <ProductPrice>{price}</ProductPrice>
                </ProductText>
                <IconButton iconSrc='assets/img/wishlist-icon.svg' alt='favorite product'/>
            </ProductContent>
        </ProductContainer>
    )
}