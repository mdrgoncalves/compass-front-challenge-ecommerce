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
    imgSrc: string;
    title: string;
    desc: string;
    price: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
    imgSrc,
    title,
    desc,
    price
}) => {

    return (
        <ProductContainer>
            <picture>
                <ProductImg src={imgSrc} alt={`${title} image`} />
            </picture>
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
                </ProductTextContainer>
                <ProductFavorite>
                    <img src='/assets/img/wishlist-icon.svg' alt='favorite icon' />
                </ProductFavorite>
            </ProductContent>
        </ProductContainer>
    );  
};  