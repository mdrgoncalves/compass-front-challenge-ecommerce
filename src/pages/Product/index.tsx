import { useParams } from "react-router-dom";

import { Button} from "../../components/Button";
import { ProductSlider } from "../../components/Desktop/ProductSlider";
import { PathPage } from "../../components/PathPage";
import { ProductDesc } from "../../components/ProductDesc";
import { ProductContainer } from "./styles";
import { ProductTabs } from "../../components/Desktop/ProductTabs";
import { ProductCarousel } from "../../components/Mobile/ProductCarousel";
import { BackButton } from "../../components/Mobile/BackButton";
import { Spacer } from "../../components/Mobile/Spacer";
import { CollapseButton } from "../../components/Mobile/CollapseButton";
import { DescriptionTab } from "../../components/Desktop/ProductTabs/DescriptionTab";
import { InviteBlock } from "../../components/Mobile/InviteBlock";
import { MobileButtonTab } from "../../components/Mobile/MobileButtonTab";
import { TrendingCarousel } from "../../components/Mobile/TrendingCarousel";
import { ProductMobileButtons } from "../../components/Mobile/ProductMobileButtons";
import { useWidth } from "../../utils/useWidth";
import { AddToBagButton } from "../../components/AddToBagButton";
import { ProductState } from "../../context/ProductContext";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/Products";
import { AddToWishlistButton } from "../../components/AddToWishlistButton";
import { ProductsCarousel } from "../../components/ProductsCarousel";
import { RatingsSection } from "../../components/RatingsSection";


export const Product: React.FC = () => {

    const { productId } = useParams<{ productId: string }>();
    const { getProductById, product } = ProductState();
    const [thisProduct, setThisProduct] = useState({} as IProduct);

    useEffect(() => {
        getProductById(productId);
    }, [productId]);

    useEffect(() => {
        setThisProduct(product);
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { 
        _id,
        productName, 
        productImage, 
        productDescription,
        productPrice,
        productCategory 
    } = thisProduct;
    const images = [productImage, productImage, productImage, productImage];

    return (

        <ProductContainer>
            <div className='page-path'>
                <BackButton />
                <PathPage
                    paths={[`${productCategory}`, `${productName}`]}
                />
            </div>
            <div className='slider'>
                <ProductCarousel
                    images={images}
                />
                <ProductSlider 
                    productImages={images}
                />
            </div>
            <div className='desc'>
                <ProductDesc 
                    name={productName}
                    description={productDescription}
                    price={productPrice}
                    productId={_id}
                />
                <div className='desc__buttons'>
                    <AddToBagButton product={thisProduct} />
                    <AddToWishlistButton
                        productId={_id}
                        buttonType='full'
                    />
                </div>
            </div>
            <div className='tabs'>
                <ProductTabs 
                    firstTabName='Product Description'
                    secondTabName='Related Products'
                    thirdTabName='Ratings and Reviews'
                    firstTabChildren={<DescriptionTab />}
                    secondTabChildren={<ProductsCarousel />}
                    thirdTabChildren={<RatingsSection productId={_id} />}
                /> 
            </div>

            {useWidth({
                renderMobile: () => (
                    <>
                    <Spacer />
                    <CollapseButton label='Product Description'>
                        <DescriptionTab />
                    </CollapseButton>
                    <Spacer />
                    <MobileButtonTab 
                        label='Ratings & Reviews'
                        route={`/${_id}/mobile-reviews`}
                    />
                    <Spacer />
                    <InviteBlock />
                    <Spacer />
                    <TrendingCarousel />
                    <ProductMobileButtons product={thisProduct} />
                    </>
                ),
                renderDesktop: () => (
                    null
                )
            })}

        </ProductContainer>
    )
};