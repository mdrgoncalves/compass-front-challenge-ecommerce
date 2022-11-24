import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";

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
import { BagState } from "../../context/BagContext";


export const Product: React.FC = () => {

    const { productId } = useParams<{ productId: string }>();

    const thisProduct = productsData.find(product => product.id === Number(productId));
    const { img, name, description, price, category } = thisProduct!;
    const images = [img, img, img];

    const { dispatch } = BagState();

    return (

        <ProductContainer>
            <div className='page-path'>
                <BackButton />
                <PathPage
                    paths={[`${category}`, `${name}`]}
                />
            </div>
            <div className='slider'>
                <ProductCarousel
                    images={images}
                />
                <ProductSlider />
            </div>
            <div className='desc'>
                <ProductDesc 
                    name={name}
                    description={description}
                    price={price}
                    productId={Number(productId)}
                />
                <div className='desc__buttons'>
                    <Button 
                        color='primary' 
                        iconType='bag'
                        onClick={() => dispatch({ type: 'ADD_TO_BAG', payload: thisProduct })}
                    >
                        Add to bag
                    </Button>
                    <Button color='secondary' iconType='wishlist'>
                        Add To Wishlist
                    </Button>
                </div>
            </div>
            <div className='tabs'>
                <ProductTabs /> 
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
                        route='/404'
                    />
                    <Spacer />
                    <InviteBlock />
                    <Spacer />
                    <TrendingCarousel />
                    <ProductMobileButtons />
                    </>
                ),
                renderDesktop: () => (
                    null
                )
            })}

        </ProductContainer>
    )
};