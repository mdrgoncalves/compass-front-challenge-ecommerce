import { font } from './../../styles/mixins';
import styled from "styled-components";

export const Container = styled.div`

    margin: 0 auto;
`;

export const GridWrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    @media screen and (max-width: 985px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.375rem;
    }
`;

export const Title = styled.h2`

    color: var(--color-primary);
    margin-bottom: 1rem;

    @media screen and (max-width: 985px) {
        display: none;
    }
`;

export const ProductsTotal = styled.h3`

    ${font.titleRegular};
    color: var(--color-low-emphasis);
    margin-bottom: 0.5rem;
`;

export const WishlistEmpty = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    img {
        margin-bottom: 0.875rem;
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 700;
    }

    h3 {
        ${font.titleMedium};
        width: 300px;
    }

    button {
        position: absolute;
        bottom: 1rem;
        width: calc(100% - 2rem);
    }

    @media screen and (max-width: 985px) {
        height: calc(100vh - 72px);
    }

    @media screen and (min-width: 985px) {

        button {
            position: relative;
            margin-top: 1rem;
        }
    }
`;