import { useState } from "react";
import { BagState } from "../../context/BagContext";
import { Button } from "../Button";

interface AddToBagProps {
    product: any;
}

export const AddToBagButton: React.FC<AddToBagProps> = ({
    product
}) => {

    const { dispatch } = BagState();
    const [isBag, setIsBag] = useState(false);

    const handleAddToBag = () => {

        if (!isBag) {
            dispatch({
                type: 'ADD_TO_BAG',
                payload: product
            });
        } else {
            dispatch({
                type: 'REMOVE_FROM_BAG',
                payload: product.id
            });
        }
        setIsBag(!isBag);
    }

    return (
        
        <Button 
            color={isBag ? 'remove' : 'primary'} 
            iconType={isBag ? 'cross' : 'bag'} 
            onClick={handleAddToBag}
        >
            {isBag ? 'Remove From Bag' : 'Add To Bag'}
        </Button>
    );
}