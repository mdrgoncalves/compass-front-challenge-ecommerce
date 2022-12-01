import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductState } from '../../context/ProductContext';
import { IProduct } from '../../types/Products';
import { useWidth } from '../../utils/useWidth';
import { CategoryFilterMobile } from '../Mobile/CategoryFilterMobile';
import { CategoryMobileHeader } from '../Mobile/CategoryMobileHeader';
import { GridFilter } from './GridFilter';
import { Pagination } from './Pagination';
import { ProductItem } from './ProductItem';
import { ProductsContainer, ProductsGrid } from './styles';

export const ProductListing: React.FC = () => {

    const { category } = useParams<{ category: string }>();

    // Set Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(9);

    // Get Products List according to Category
    const { getProductsByCategory, categoryProducts } = ProductState();
    const productsList = categoryProducts;
    
    useEffect(() => {
        getProductsByCategory(category);
    }, [category]);

    // Get Current Product
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsList.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change Page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () => {
        if (currentPage < productsList.length / productsPerPage) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(1);
        }
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <>
        {useWidth({
            renderMobile: () => (
                <>
                <CategoryMobileHeader 
                    totalProducts={productsList.length}
                />
                <ProductsGrid>
                    {productsList.map((product: IProduct) => {
                        const { 
                            _id, 
                            productName, 
                            productImage, 
                            productDescription,
                            productPrice,
                            productCategory
                        } = product;

                        return (
                            <ProductItem
                                key={_id}
                                category={productCategory}
                                id={_id}
                                imgSrc={productImage}
                                title={productName}
                                desc={productDescription}
                                price={productPrice}
                            />
                        );
                    })}
                </ProductsGrid>
                <CategoryFilterMobile />
                </>
            ),
            renderDesktop: () => (
                <ProductsContainer>
                    <GridFilter 
                        indexOfFirstProduct={indexOfFirstProduct}
                        indexOfLastProduct={indexOfLastProduct}
                        totalProducts={productsList.length}
                        setProductsPerPage={setProductsPerPage}
                    />
                    <ProductsGrid>
                        {currentProducts.map((product: IProduct) => {
                            const { 
                                _id, 
                                productName, 
                                productImage, 
                                productDescription,
                                productPrice,
                                productCategory
                            } = product;
                            
                            return (
                                <ProductItem
                                    key={_id}
                                    category={productCategory}
                                    id={_id}
                                    imgSrc={productImage}
                                    title={productName}
                                    desc={productDescription}
                                    price={productPrice}
                                />
                            );
                        })}
                    </ProductsGrid>
                    <Pagination
                        productsPerPage={productsPerPage}
                        totalProducts={productsList.length}
                        paginate={paginate}
                        nextPage={nextPage}
                        activePage={currentPage}
                    />
                </ProductsContainer>
            )
        })}
        
        </>
    );
};
