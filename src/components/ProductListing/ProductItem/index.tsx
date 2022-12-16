import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../types/Products";
import { AddToBagButton } from "../../AddToBagButton";
import { AddToWishlistButton } from "../../AddToWishlistButton";
import { 
    ProductContainer, 
    ProductImg, 
    ProductContent,
    ProductTitle,
    ProductDesc,
    RatingContainer,
    ProductTextContainer,
    PricesContainer,
    ProductFavorite
} from "./styles";

interface ProductItemProps {
    category: string;
    id: string;
    imgSrc: string;
    title: string;
    desc: string;
    price: number;
    forWishlist?: boolean;
    product?: IProduct;
}

export const ProductItem: React.FC<ProductItemProps> = ({
    category,
    id,
    imgSrc,
    title,
    desc,
    price,
    forWishlist = false,
    product
}) => {

    return (
        <ProductContainer>
            <Link to={`/category/${category}/${id}`}>
                <ProductImg src={imgSrc} alt={`${title} image`} />
            </Link>
            <ProductContent>
                <ProductTextContainer>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductDesc>{desc}</ProductDesc>
                    <RatingContainer>
                        <img src='/assets/img/icons/stars-icon.svg' alt='stars' />
                        <p>43 Ratings</p>
                    </RatingContainer>
                    <PricesContainer>
                        <span className='current-price'>{price}</span>
                        <span className='previous-price'>$78.66</span>
                        <span className='discount-price'>50% OFF</span>
                    </PricesContainer>
                    {forWishlist &&
                        <AddToBagButton product={product} />
                    }
                </ProductTextContainer>
                {forWishlist ? 
                    null : 
                    <AddToWishlistButton 
                        productId={id}
                        buttonType='icon'
                    />
                }
            </ProductContent>
        </ProductContainer>
    );  
};  