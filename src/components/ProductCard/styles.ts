import styled from "styled-components";
import { font } from "../../styles/mixins";

export const ProductContainer = styled.div`

    width: 136px;
    margin-right: 8px;

    @media (min-width: 985px) {
        width: 286px;
        margin-right: 31px;
    }
`;

export const ProductPicture = styled.picture`

    img {
        width: 136px;

        @media (min-width: 985px) {
            height: 286px;
            width: 286px;
        }
    }
`;

export const ProductContent = styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: 8px;
`;

export const ProductText = styled.div`

    display: flex;
    flex-direction: column;
    gap: 3px;

    @media (min-width: 985px) {
        gap: 8px;
    }
`;

export const ProductTitle = styled.h4`

    a {
        ${font.labelSmall};
        color: var(--color-high-emphasis);

        @media (min-width: 985px) {
            ${font.bodyMedium};
        }
    }
`;

export const ProductDesc = styled.p`

    ${font.labelMedium};
    color: var(--color-low-emphasis);

    @media (min-width: 985px) {
        ${font.labelLarge};
    }
`;

export const ProductPrice = styled.p`

    ${font.titleRegular};

    @media (min-width: 985px) {
        ${font.bodyMedium};
    }
`;