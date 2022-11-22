import { font } from './../../styles/mixins';
import styled from "styled-components";

export const ProductDescContainer = styled.div`

    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    border-bottom: 1px solid #e6e6e6;

    @media (max-width: 985px) {
        border: none;
    }
`;

export const ProductDescText = styled.div`

    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    h1 {
        ${font.displayMedium};
        color: var(--color-dark);
    }

    p {
        ${font.displaySmall};
        color: var(--color-low-emphasis);
    }

    @media (max-width: 985px) {
        order: 1;
        margin-bottom: 10px;

        h1 {
            ${font.bodyMedium};
        }

        p {
            ${font.titleMedium};
        }
    }
`;

export const RatingDesktopContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;

    span {
        ${font.bodyRegular};
        color: var(--color-light-text);
    }

    @media (max-width: 985px) {
        display: none;
    }
`;

export const RatingDesktopMobile = styled.div`

    display: flex;
    align-items: center;
    gap: 14px;
    order: 3;

    .label {
        ${font.titleRegular};
    }

    .ratings {
        ${font.titleMedium};
        color: var(--color-low-emphasis);
    }
    
    @media (min-width: 985px) {
        display: none;
    }
`;

export const PriceContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 985px) {
        order: 2;
        gap: 12px;
        margin-bottom: 18px;
    }
`;

export const CurrentPrice = styled.span`

    ${font.displayLarge};

    @media (max-width: 985px) {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1rem;
    }
`;

export const OldPrice = styled.span`

    font-size: 2.125rem;
    font-weight: 600;
    line-height: 28px;
    color: var(--color-light-text);
    text-decoration: line-through;

    @media (max-width: 985px) {
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.125rem;
    }
`

export const Discount = styled.span`

    ${font.displaySmall};
    color: #FF404B;

    @media (max-width: 985px) {
        ${font.titleMedium};
        line-height: 1.125rem;
    }
`;