import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BagState } from "../../../context/BagContext";
import { Button } from "../../Button";
import { PincodeInput } from "../../ProductDesc/DeliveryDetails/PincodeInput";
import { ProductBagDisplay } from "./ProductBagDisplay";
import { 
    CloseContainer, 
    ModalContainer, 
    ModalWrapper, 
    ProductDisplay, 
    TotalContainer,
    CouponContainer, 
    ButtonContainer
} from "./styles";

interface ModalProps {
    onClose: () => void;
}

export const BasketModal: React.FC<ModalProps> = ({
    onClose
}) => {

    const { state: { bag }, dispatch } = BagState();

    const [subTotal, setSubTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setSubTotal(
            bag.reduce((prevValue: number, currValue: any) => {
                let price = Number(currValue.price.replace('$', ''));
                return prevValue + price * currValue.quantity;
            }, 0)
        )
        setTotalItems(bag.length.toFixed(2));
    }, [bag]);

    useEffect(() => {
        setTotal(Number(subTotal) + Number(totalItems));
    }, [subTotal]);

    return (
        
        <ModalWrapper>
            <ModalContainer>
                <CloseContainer>
                    <button onClick={onClose}>
                        <img src='/assets/img/icons/left-arrow-icon.png' alt='back icon' />
                    </button>
                    <h2>Back</h2>
                </CloseContainer>
                <ProductDisplay>
                    {bag.length > 0 ? (
                        <>
                        {bag.map((product: any) => (
                            <ProductBagDisplay
                                key={product.id}
                                imgSrc={product.img}
                                title={product.name}
                                description={product.description}
                                price={product.price}
                                onClick={() => dispatch({ type: 'REMOVE_FROM_BAG', payload: product.id })}
                                setState={(value: number) => dispatch({ type: 'CHANGE_BAG_QUANTITY', payload: { id: product.id, quantity: value } })}
                            />
                        ))}
                        </>    
                    ) : (
                        <h2>Bag is empty</h2>
                    )}
                </ProductDisplay>
                <TotalContainer>
                    <p>
                        <span>Subtotal:</span>
                        <span>${subTotal}</span>
                    </p>
                    <p>
                        <span>Tax:</span>
                        <span>${totalItems}</span>
                    </p>
                    <p className='total'>
                        <span>Total:</span>
                        <span>${total}</span>
                    </p>
                </TotalContainer>
                <CouponContainer>
                    <PincodeInput placeholder='Apply Coupon Code' />
                </CouponContainer>
                <ButtonContainer>
                    <Button color='primary'>Place Order</Button>
                    <Link 
                        to='/category/handbags'
                        onClick={onClose}
                    >
                        Continue Shopping
                    </Link>
                </ButtonContainer>
            </ModalContainer>
        </ModalWrapper>
    );  
};
