import { Button} from "../../../components/Button";
import { ButtonsContainer } from "./styles";

export const ProductMobileButtons: React.FC = () => {

    return (
        
        <ButtonsContainer>
            <img src='/assets/img/wishlist-icon.svg' alt='favorite' />
            <Button color='primary' iconType='bag'>
                Add to bag
            </Button>
        </ButtonsContainer>
    );  
};