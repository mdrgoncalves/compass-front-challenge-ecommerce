import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
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
    const [productsPerPage] = useState(9);

    // Get Products List according to Category
    const productsList = productsData.filter(products => products.category === category);

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
                    {productsList.map(product => (
                        <ProductItem
                            key={product.id}
                            category={product.category}
                            id={product.id}
                            imgSrc={product.img}
                            title={product.name}
                            desc={product.description}
                            price={product.price}
                        />
                    ))}
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
                    />
                    <ProductsGrid>
                        {currentProducts.map(product => (
                            <ProductItem
                                category={product.category}
                                id={product.id}
                                key={product.id}
                                imgSrc={product.img}
                                title={product.name}
                                desc={product.description}
                                price={product.price}
                            />
                        ))}
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
