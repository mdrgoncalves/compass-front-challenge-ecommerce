import { BagDisplay } from "../../components/BagDisplay";
import { CollapseButtonDesktop } from "../../components/Desktop/CollapseButtonDesktop";
import { PageHeader } from "../../components/Desktop/PageHeader";
import { OrderSummary } from "../../components/OrderSummary";
import { CouponInput } from "../../components/CouponInput";
import { 
    BagContainer, 
    BagContent,
    ButtonWrapper, 
    CardsWrapper, 
    InputWrapper, 
    MobileBagContainer, 
    PriceLabel, 
    PriceValue, 
    WrapperWithPadding,
    BagEmpty   
} from "./styles";
import { BagState } from "../../context/BagContext";
import { useWidth } from "../../utils/useWidth";
import { useNavigate } from "react-router-dom";
import { MobileHeading } from "../../components/Mobile/MobileHeading";
import { ProductBagMobile } from "../../components/Mobile/ProductBagMobile";
import { IProduct } from "../../types/Products";
import { Button } from "../../components/Button";

export const Bag: React.FC = () => {

    const { state: { bag }, grandTotal } = BagState()
    const navigate = useNavigate();

    return(
        
        <>
        {useWidth({
            renderMobile: () => (
                <>
                <WrapperWithPadding>
                    <MobileHeading
                        title='My Bag'
                        withBack
                        withPadding
                        size='small'
                        onClick={() => navigate(-1)}
                    />
                </WrapperWithPadding>
                {!(bag.length === 0) ? (
                <MobileBagContainer>
                    <CardsWrapper>
                        {bag.map((product: IProduct) => (
                            <ProductBagMobile
                                key={product._id}
                                productId={product._id}
                                productImage={product.productImage}
                                productName={product.productName}
                                productDescription={product.productDescription}
                                productPrice={product.productPrice}
                            />
                        ))}
                    </CardsWrapper>
                    <InputWrapper>
                        <CouponInput 
                            placeholder='Apply Coupon Code'
                        />
                    </InputWrapper>
                    <WrapperWithPadding>
                        <OrderSummary />
                    </WrapperWithPadding>
                    <ButtonWrapper>
                        <div>
                            <PriceLabel>Total Bag Amount</PriceLabel>
                            <PriceValue>${grandTotal.toFixed(2)}</PriceValue>
                        </div>
                        <Button
                            color='primary'
                            onClick={() => navigate('/checkout')}
                        >
                            Place Order
                        </Button>
                    </ButtonWrapper>
                </MobileBagContainer>
                ) : (
                    <BagEmpty>
                        <img src='/assets/img/bag-empty.png' alt='bag empty' />
                        <h2>Uh Oh...!</h2>
                        <p>You haven’t added any any items. Start shopping to make your bag bloom</p>
                        <div>
                            <Button
                                color='primary'
                                onClick={() => navigate('/home')}
                            >
                                Continue Shopping
                            </Button>
                        </div>
                    </BagEmpty>
                )}
                </>
            ),
            renderDesktop: () => (
                <BagContainer>
                    <PageHeader 
                        title='My Cart'
                        paths={['My Cart']}
                    />
                    <BagContent>
                        <div className='bag-content__left'>
                            <BagDisplay 
                                productsList={bag}
                            />
                            <CollapseButtonDesktop label='Apply Coupon Code' >
                                <div className='collapse-children'>
                                    <CouponInput placeholder='Apply Coupon Code' />
                                </div>
                            </CollapseButtonDesktop>
                        </div>
                        <OrderSummary 
                            withButtons
                        />
                    </BagContent>
                </BagContainer>
                )
        })}
        </>
    )
}