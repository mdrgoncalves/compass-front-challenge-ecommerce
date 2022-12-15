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
    const { 
        getProductsByCategory, 
        categoryProducts,
        getProductsByCategoryAndPage,
        getProductsByCategoryAndPageSortedByName,
        getProductsByCategoryAndPageSortedByPrice,
        paginateProducts
    } = ProductState();

    const productsList = paginateProducts;
    
    useEffect(() => {
        getProductsByCategory(category);
        getProductsByCategoryAndPage(category, currentPage, productsPerPage);
    }, [category]);

    useEffect(() => {
        getProductsByCategoryAndPage(category, currentPage, productsPerPage);
    }, [currentPage, productsPerPage]);

    // Define list according to sort
    const [sortState, setSortState] = useState('position');

    useEffect(() => {
        switch (sortState) {
            case 'price': 
                getProductsByCategoryAndPageSortedByPrice(category, currentPage, productsPerPage);
                break;
            case 'name':
                getProductsByCategoryAndPageSortedByName(category, currentPage, productsPerPage);
                break;
            case 'position':
                getProductsByCategoryAndPage(category, currentPage, productsPerPage);
                break;
        }
    }, [sortState, category]);

    // Get Current Product
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const [currentProducts, setCurrentProducts] = useState([])

    useEffect(() => {
        setCurrentProducts(productsList);
    }, [currentPage, productsPerPage, productsList, indexOfFirstProduct, indexOfLastProduct, sortState]);

    // Change Page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () => {
        if (currentPage < categoryProducts.length / productsPerPage) {
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
                        setSortState={setSortState}
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
                        totalProducts={categoryProducts.length}
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
