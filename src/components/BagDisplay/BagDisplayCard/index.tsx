import { Link } from "react-router-dom"
import { 
    TableItem, 
    TableItemButtons, 
    TableItemInfo, 
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
                <TableItemInfo>
                    <img src={imgSrc} alt={`${name} image`} />
                    <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>Qty - {quantity}</p>
                    </div>
                </TableItemInfo>
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