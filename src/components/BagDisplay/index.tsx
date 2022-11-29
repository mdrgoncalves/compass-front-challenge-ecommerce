import { BagState } from "../../context/BagContext";
import { IProduct } from "../../types/Products";
import { BagDisplayCard } from "./BagDisplayCard";
import { TableContainer, TableHeader } from "./styles"

export const BagDisplay: React.FC = () => {

    const { state: { bag } } = BagState();

    return(

        <TableContainer>
            <TableHeader>
                <span>Product Name</span>
                <div>
                    <span>Price</span>
                    <span>Qty</span>
                    <span>Subtotal</span>
                </div>
            </TableHeader>
            {bag.map((item: IProduct) => (
                <BagDisplayCard
                    key={item._id}
                    imgSrc={item.productImage}
                    name={item.productName}
                    description={item.productDescription}
                    quantity={item.productQuantity}
                    price={item.productPrice}
                />
            ))}
        </TableContainer>
    )
}