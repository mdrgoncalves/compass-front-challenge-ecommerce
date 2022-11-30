import { Link } from "react-router-dom"
import { CartProductCard } from "../../CartProductCard";
import { 
    TableItem, 
    TableItemButtons, 
    TableItemPrices, 
    TableItemValues 
} from "./styles"

interface BagDisplayCardProps {
    imgSrc: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
};

export const BagDisplayCard: React.FC<BagDisplayCardProps> = ({
    imgSrc,
    name,
    description,
    quantity,
    price
}) => {

    return(
        
        <TableItem>
                <CartProductCard 
                    imgSrc={imgSrc}
                    name={name}
                    description={description}
                    quantity={quantity}
                />
                <TableItemValues>
                    <TableItemPrices>
                        <span>${price}</span>
                        <span>{quantity}</span>
                        <span>${(price * quantity).toFixed(2)}</span>
                    </TableItemPrices>
                    <TableItemButtons>
                        <Link to='/404'>Move to Wishlist</Link>
                        <button>Remove</button>
                    </TableItemButtons>
                </TableItemValues>
            </TableItem>
    )
}