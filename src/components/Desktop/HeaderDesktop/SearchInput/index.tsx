import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductState } from "../../../../context/ProductContext";
import { IProduct } from "../../../../types/Products";
import { InputSearch, ResultsList } from "./styles"

export const SearchInput: React.FC = () => {
    
    const { getProducts, products } = ProductState();
    const [result, setResult] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        const search = products.filter((product: IProduct) => 
            product.productName
                .toLowerCase()
                .includes(result.toLowerCase()));
        setResults(search);
    }, [result]);

    useEffect(() => {
        document.addEventListener('click', () => {
            setResult('');
        });
    }, []);

    return (
        
        <>
        <InputSearch 
            type='search' 
            placeholder='Search for products or brands.....' 
            value={result}
            onChange={(e) => setResult(e.target.value)}
        />
        {result && (
            <ResultsList>
                {results.map((product: IProduct) => (
                    <li key={product._id}>
                        <Link 
                            to={`/category/${product.productCategory}/${product._id}`}
                        >
                            {product.productName}
                        </Link>
                    </li>
                ))}
            </ResultsList>
        )}
        </>
    )
}