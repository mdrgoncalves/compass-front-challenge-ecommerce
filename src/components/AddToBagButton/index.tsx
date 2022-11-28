import { useEffect, useState } from "react";
import { BagState } from "../../context/BagContext";
import { Button } from "../Button";

interface AddToBagProps {
    product: any;
}

export const AddToBagButton: React.FC<AddToBagProps> = ({
    product
}) => {

    const { state: { bag }, dispatch } = BagState();
    
    const isInBag = bag.find((item: any) => item._id === product._id);
    const [isBag, setIsBag] = useState(false);
    
    useEffect(() => {
        if (isInBag) {
            setIsBag(true);
        } else {
            setIsBag(false);
        }
    }, [isInBag]);

    const handleAddToBag = () => {

        if (isInBag) {
            dispatch({
                type: 'REMOVE_FROM_BAG',
                payload: product._id
            });
            setIsBag(false);
        } else {
            dispatch({
                type: 'ADD_TO_BAG',
                payload: product
            });
            setIsBag(true);
        }
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