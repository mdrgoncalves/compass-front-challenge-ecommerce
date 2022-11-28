import { createContext, useContext, useState } from "react";
import { api } from "../utils/api";

export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: any) => {

    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [product, setProduct] = useState({});
    
    // Get All Products
    const getProducts = async () => {

        try {
            const { data } = await api.get("/products");
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Get Product by ID
    const getProductById = async (id: string) => {

        try {
            const { data } = await api.get(`/products/${id}`);
            setProduct(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Get Products by Category
    const getProductsByCategory = async (category: string) => {

        try {
            const { data } = await api.get(`/products/category/${category}`);
            setCategoryProducts(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    
    return (
        <ProductContext.Provider value={{ 
            getProducts, 
            products,
            getProductById,
            product,
            getProductsByCategory,
            categoryProducts
        }}>
                {children}
        </ProductContext.Provider>
    );
};

export const ProductState = () => {
    return useContext(ProductContext);
}
export default ProductProvider;