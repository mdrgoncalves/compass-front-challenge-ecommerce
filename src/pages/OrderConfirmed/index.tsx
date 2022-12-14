import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ConfirmedContainer } from "./styles";

export const OrderConfirmed: React.FC = () => {

    const navigate = useNavigate();

    return (
        
        <ConfirmedContainer>
            <img src='/assets/img/order-confirmed.png' alt='order image' />
            <div className='text'>
                <h2>Cheerio!!</h2>
                <p>The order has been placed. Thanks for shopping with us. You’ll soon recieve the tracking details</p>
            </div>
            <div className='buttons'>
                <Button 
                    color='secondary'
                    onClick={() => navigate('/profile/orders')}
                >
                    View Order
                </Button>
                <Button 
                    color='primary'
                    onClick={() => navigate('/home')}
                >
                    Continue Shopping
                </Button>
            </div>
        </ConfirmedContainer>
    );  
};
