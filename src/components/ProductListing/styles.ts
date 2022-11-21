import styled from "styled-components";

export const ProductsContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 100px;

    @media (max-width: 1024px) {
        margin-right: 1.5rem;
    }
` ;

export const ProductsGrid = styled.section`

    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 286px));
    justify-items: start;
    gap: 68px 32px;

    @media (max-width: 768px) {
        justify-content: center;
    }

    @media (max-width: 985px) {
        grid-template-columns: repeat(2, minmax(100px, 286px));
        gap: 25px 22px;
    }
`;