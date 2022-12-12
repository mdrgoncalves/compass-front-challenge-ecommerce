import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "../../context/UserContex";
import { IProduct } from "../../types/Products";
import { Button } from "../Button";
import { ProductItem } from "../ProductListing/ProductItem";
import { Container, GridWrapper, ProductsTotal, Title, WishlistEmpty } from "./styles";

export const Wishlist: React.FC = () => {

    const { getWishlist, wishlist } = UserState();
    
    const [products, setProducts] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getWishlist();
        if (wishlist) {
            setProducts(wishlist.products);
        }
    }, [wishlist]);

    return (
        
        <Container>
            {wishlist ?
            <>
            <Title>My Wishlist</Title>
            <ProductsTotal>{products?.length} product(s)</ProductsTotal>
            <GridWrapper>
                {products?.map((product: IProduct) => (
                    <ProductItem
                        key={product._id}
                        category={product.productCategory}
                        id={product._id}
                        imgSrc={product.productImage}
                        title={product.productName}
                        desc={product.productDescription}
                        price={product.productPrice}
                        forWishlist={true}
                    />
                ))}
            </GridWrapper> 
            </> :
            <WishlistEmpty>
                <img src='/assets/img/wishlist-empty.png' alt='wishlist empty' />
                <h2>Well...</h2>
                <h3>It seems you have not added any products to for wishlist. </h3>
                <Button
                    color='primary'
                    onClick={() => navigate('/home')}
                >
                    Start Shopping
                </Button>
            </WishlistEmpty>
            }
        </Container>
    );  
};