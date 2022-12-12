import { IProduct } from "../../types/Products";
import { BagDisplayCard } from "./BagDisplayCard";
import { TableContainer, TableHeader } from "./styles"

interface BagDisplayProps {
    productsList: [IProduct];
    withButtons?: boolean;
}

export const BagDisplay: React.FC<BagDisplayProps> = ({
    productsList,
    withButtons
}) => {

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
            {productsList.map((item: IProduct) => (
                <BagDisplayCard
                    key={item._id}
                    productId={item._id}
                    imgSrc={item.productImage}
                    name={item.productName}
                    description={item.productDescription}
                    quantity={item.productQuantity}
                    price={item.productPrice}
                    withButtons={withButtons}
                />
            ))}
        </TableContainer>
    )
}