import styled from "styled-components";

export const BrandsContainer = styled.section`

    padding: 0 1rem;
    margin-bottom: 24px;

    @media (min-width: 1025px) {
        padding: 0 20px;
        margin-bottom: 68px;
    }
`;

export const BrandsGrid = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 4.44vw;

    img {
        width: 27.78vw;
        height: 27.78vw;
    }

    @media (min-width: 1025px) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 46px;

        img {
            width: 168px;
            height: 168px;
        }
    }
`;
