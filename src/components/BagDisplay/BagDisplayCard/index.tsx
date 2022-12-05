import { AddToWishlistButton } from "../../AddToWishlistButton";
import { CartProductCard } from "../../CartProductCard";
import { 
    TableItem, 
    TableItemButtons, 
    TableItemPrices, 
    TableItemValues 
} from "./styles"

interface BagDisplayCardProps {
    productId: string;
    imgSrc: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
};

export const BagDisplayCard: React.FC<BagDisplayCardProps> = ({
    productId,
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
                        <AddToWishlistButton
                            productId={productId}
                            buttonType='text'
                        />
                        <button className='remove'>
                            Remove
                        </button>
                    </TableItemButtons>
                </TableItemValues>
            </TableItem>
    )
}