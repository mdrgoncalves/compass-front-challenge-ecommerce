import { font } from './../../../styles/mixins';
import styled from 'styled-components';

export const ProductContainer = styled.div`

    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
    width: max-content;
    margin-bottom: 19px;
`;

export const ProductImg = styled.img`

    width: 286px;
    height: 286px;
    border-radius: 0.5rem;

    @media (max-width: 1024px) {
        width: 200px;
        max-height: 200px;
    }

    @media (max-width: 985px) {
        width: 41.94vw;
        max-height: 43.33vw;
    }
`;

export const ProductContent = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ProductTitle = styled.h4`

    ${font.bodyMedium};

    @media (max-width: 985px) {
        ${font.labelMedium};
    }
`

export const ProductDesc = styled.p`

    ${font.labelLarge};
    color: var(--color-low-emphasis);

    @media (max-width: 985px) {
        ${font.labelMedium};
    }
`;

export const RatingContainer = styled.div`

    display: flex;
    gap: 1rem;
    align-items: flex-end;

    p {
        ${font.titleMedium};
        color: var(--color-primary);
    }

    @media (max-width: 985px) {
        display: none;
    }
`;

export const ProductTextContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: 985px) {
        gap: 3px;
    }
`;

export const PricesContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 6px;

    .current-price {
        ${font.bodyMedium};
    }

    .previous-price {
        font-size: 0.875rem;
        font-weight: 400;
        text-decoration: line-through;
        color: var(--color-low-emphasis);
    }

    .discount-price {
        ${font.bodyMedium};
        color: #E21D1D;
    }

    @media (max-width: 985px) {
        
        .current-price {
            ${font.titleRegular};
        }

        .previous-price {
            font-size: 0.625rem;
        }

        .discount-price {
            font-size: 0.625rem;
        }
    }
`;

export const ProductFavorite = styled.picture`

    @media (max-width: 1024px) {
        margin-left: -32px;
    }
`;