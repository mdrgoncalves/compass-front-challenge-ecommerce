import { createContext, useContext, useState } from "react";
import { api } from "../utils/api";

export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: any) => {

    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [paginateProducts, setPaginateProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [productReviews, setProductReviews] = useState([]);
    
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

    // Get Products by Category and Page
    const getProductsByCategoryAndPage = async (
        category: string, 
        page: number,
        limit: number
    ) => {

        try {
            const { data } = await api
                .get(`/products/category/${category}/page/${page}/limit/${limit}`);
            setPaginateProducts(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Get products by Category and Page sorted by Name
    const getProductsByCategoryAndPageSortedByName = async (
        category: string,
        page: number,
        limit: number
    ) => {
        
        try {
            const { data } = await api
                .get(`/products/category/${category}/page/${page}/limit/${limit}/sort/name`);
            setPaginateProducts(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Get products by Category and Page sorted by Price
    const getProductsByCategoryAndPageSortedByPrice = async (
        category: string,
        page: number,
        limit: number
    ) => {
        
        try {
            const { data } = await api
                .get(`/products/category/${category}/page/${page}/limit/${limit}/sort/price`);
            setPaginateProducts(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    // Get Ratings by Product
    const getRatingsByProduct = async (id: string) => {

        try {
            const { data } = await api.get(`/ratings/product/${id}`);
            setProductReviews(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Get Ratings by User
    const getRatingsByUser = async (id: string) => {

        try {
            const { data } = await api.get(`/ratings/user/${id}`);
            setProductReviews(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Add Rating
    const addRating = async (rating: any) => {

        try {
            await api.post("/ratings", rating);
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
            categoryProducts,
            getProductsByCategoryAndPage,
            getProductsByCategoryAndPageSortedByName,
            getProductsByCategoryAndPageSortedByPrice,
            paginateProducts,
            getRatingsByProduct,
            getRatingsByUser,
            productReviews,
            addRating
        }}>
                {children}
        </ProductContext.Provider>
    );
};

export const ProductState = () => {
    return useContext(ProductContext);
}
export default ProductProvider;