import { Link } from "react-router-dom";
import { AddToWishlistButton } from "../AddToWishlistButton";

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
    category: string;
    imgSrc: string;
    id: string;
    title: string;
    desc: string;
    price: number;
}

export const ProductCard = ({
    category,
    imgSrc,
    id,
    title,
    desc,
    price
}: ProductCardProps) => {
    
    return (
        <ProductContainer>
            <ProductPicture>
                <Link to={`/category/${category}/${id}`}>
                    <img src={imgSrc} alt={`${title} product`} />
                </Link>
            </ProductPicture>
            <ProductContent>
                <ProductText>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductDesc>{desc}</ProductDesc>
                    <ProductPrice>{price}</ProductPrice>
                </ProductText>
                <AddToWishlistButton 
                    productId={id}
                    buttonType='icon'
                />
            </ProductContent>
        </ProductContainer>
    )
}