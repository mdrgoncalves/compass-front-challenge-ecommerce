import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BagState } from "../../../context/BagContext";
import { IProduct } from "../../../types/Products";
import { Button } from "../../Button";
import { CouponInput } from "../../CouponInput";
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

    const navigate = useNavigate();

    const { state: { bag }, dispatch, bagQuantity } = BagState();

    const [subTotal, setSubTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let subTotal = 0;
        let items = 0;
        bag.forEach((item: IProduct) => {
            subTotal += item.productPrice * bagQuantity[item._id];
            items += bagQuantity[item._id];
            item.productQuantity = bagQuantity[item._id];
        });
        setSubTotal(subTotal);
        setTotalItems(items);
    }, [bag, bagQuantity]);

    const handleCheckout = () => {
        onClose();
        navigate('/cart');
    }

    useEffect(() => {
        localStorage.setItem('bag', JSON.stringify(bag));
    }, [bag]);

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
                        {bag.map((product: IProduct) => {

                            const { 
                                _id, 
                                productName, 
                                productImage, 
                                productDescription,
                                productPrice,
                            } = product;
                        
                            return (
                                <ProductBagDisplay
                                    key={_id}
                                    imgSrc={productImage}
                                    title={productName}
                                    description={productDescription}
                                    price={productPrice}
                                    onClick={() => dispatch({type: 'REMOVE_FROM_BAG', payload: _id})}
                                    productId={_id}
                                />
                            )
                        })}
                        </>    
                    ) : (
                        <h2>Bag is empty</h2>
                    )}
                </ProductDisplay>
                <TotalContainer>
                    <p>
                        <span>Subtotal:</span>
                        <span>${subTotal.toFixed(2)}</span>
                    </p>
                    <p>
                        <span>Tax:</span>
                        <span>${totalItems.toFixed(2)}</span>
                    </p>
                    <p className='total'>
                        <span>Total:</span>
                        <span>${(subTotal + totalItems).toFixed(2)}</span>
                    </p>
                </TotalContainer>
                <CouponContainer>
                    <CouponInput placeholder='Apply Coupon Code' />
                </CouponContainer>
                <ButtonContainer>
                    <Button 
                        color='primary'
                        onClick={() => handleCheckout()}
                    >Place Order</Button>
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
