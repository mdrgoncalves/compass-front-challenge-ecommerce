import { PaginationButton, PaginationContainer, PaginationWrapper } from "./styles";

interface PaginationProps {
    productsPerPage: number;
    totalProducts: number;
    paginate: (pageNumber: number) => void;
    nextPage: () => void;
    activePage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
    productsPerPage,
    totalProducts,
    paginate,
    nextPage,
    activePage,
}) => {

    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationWrapper>
            <PaginationContainer>
                {pageNumbers.map(number => (    
                    <li key={number}>
                        <PaginationButton
                            onClick={() => paginate(number)}
                            className={activePage === number ? 'active' : ''}
                        >
                            {number}
                        </PaginationButton>
                    </li>
                ))}
            </PaginationContainer>
            <PaginationContainer>
                <li>
                    <PaginationButton onClick={nextPage}>
                        Next
                    </PaginationButton>
                </li>
            </PaginationContainer>
            
        </PaginationWrapper>
    )
}