import { BagDisplay } from "../../components/BagDisplay";
import { CollapseButtonDesktop } from "../../components/Desktop/CollapseButtonDesktop";
import { PageTitle } from "../../components/Desktop/PageTitle"
import { OrderSummary } from "../../components/OrderSummary";
import { PathPage } from "../../components/PathPage"
import { PincodeInput } from "../../components/ProductDesc/DeliveryDetails/PincodeInput";
import { BagContainer, BagContent } from "./styles";

export const Bag: React.FC = () => {

    return(
        <BagContainer>
            <div className='bag__path'>
                <PathPage
                    paths={['My Cart']}
                />
            </div>
            <div className='bag__title'>
                <PageTitle title='My Cart' />
            </div>
            <BagContent>
                <div className='bag-content__left'>
                    <BagDisplay />
                    <CollapseButtonDesktop label='Apply Coupon Code' >
                        <div className='collapse-children'>
                            <PincodeInput placeholder='Apply Coupon Code' />
                        </div>
                    </CollapseButtonDesktop>
                </div>
                <OrderSummary 
                    title='Order Summary'
                    withButtons
                />
            </BagContent>
        </BagContainer>
    )
}