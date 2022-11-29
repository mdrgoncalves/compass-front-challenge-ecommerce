import { BagDisplay } from "../../components/BagDisplay";
import { CollapseButtonDesktop } from "../../components/Desktop/CollapseButtonDesktop";
import { PageHeader } from "../../components/Desktop/PageHeader";
import { OrderSummary } from "../../components/OrderSummary";
import { PincodeInput } from "../../components/ProductDesc/DeliveryDetails/PincodeInput";
import { BagContainer, BagContent } from "./styles";

export const Bag: React.FC = () => {

    return(
        <BagContainer>
            <PageHeader 
                title='My Cart'
                paths={['My Cart']}
            />
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