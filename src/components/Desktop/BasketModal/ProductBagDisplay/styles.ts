import { font } from './../../../../styles/mixins';
import styled from "styled-components";

export const ProductContainer = styled.article`

    display: flex;
    justify-content: space-between;
    height: 155px;
    max-width: 400px;
    padding: 24px 0 52px 0;
    border-bottom: 1px solid #e6e6e6;
`;

export const ProductImage = styled.img`
    width: 75px;
    height: 80px;
`;

export const ProductContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
        ${font.bodyMedium};
    }

    p {
        ${font.bodyRegular};
    }
`;

export const ProductLeft = styled.div`

    display: flex;
    gap: 1rem;
`;

export const ProductRight = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;

    button {
        background-color: transparent;
        border: none;
        text-align: right;
    }

    p {
        font-size: 0.875rem;
        color: var(--color-high-emphasis);
    }
`;