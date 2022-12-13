import { MobileModal } from "../../MobileModal";
import { SortContainer } from "./styles";

interface SortModalProps {
    onClose: () => void;
}

export const SortModal: React.FC<SortModalProps> = ({
    onClose
}) => {

    return (
        
        <MobileModal onClose={onClose}>
            <SortContainer>
                <h2>Sort By</h2>
                <fieldset>
                    <label htmlFor='latest'>
                        <input type='radio' name='sort' id='latest' />
                        <span>Latest Products</span>
                    </label>
                    <label htmlFor='price-cresc'>
                        <input type='radio' name='sort' id='price-cresc'/>
                        <span>Price - Low to High</span>
                    </label>
                    <label htmlFor='price-decresc'>
                        <input type='radio' name='sort' id='price-decresc'/>
                        <span>Price - High to Low</span>
                    </label>
                    <label htmlFor='popularity'>
                        <input type='radio' name='sort' id='popularity'/>
                        <span>Popularity</span>
                    </label>
                    <label htmlFor='ratings'>
                        <input type='radio' name='sort' id='ratings' />
                        <span>Customer Ratings</span>
                    </label>
                </fieldset>
            </SortContainer>
        </MobileModal>
    );  
};