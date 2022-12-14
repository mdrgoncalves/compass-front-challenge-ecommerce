import { font } from './../../../styles/mixins';
import styled from "styled-components";

interface Props {
    gap?: string;
    isColumn?: boolean;
}

export const FlexContainer = styled.div`

    display: flex;
    gap: ${(props: Props) => props.gap ? props.gap : '0'};
    flex-direction: ${(props: Props) => props.isColumn ? 'column' : 'row'};
`;

export const ProductCard = styled.article`

    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 328px;
    background-color: var(--color-bright);
`;

export const ProductIcon = styled.img`

    width: 96px;
    height: 96px;
    border-radius: 0.5rem;
`;

export const TitleText = styled.h3`

    ${font.labelSmall};
`;

export const DescText = styled.p`

    ${font.labelMedium};
    color: var(--color-low-emphasis);
`;

export const PriceText = styled.p`

    ${font.titleRegular};
`;

export const OldPriceText = styled.p`

    font-size: 0.625rem;
    text-decoration: line-through;  
`;

export const DiscountText = styled.p`

    font-size: 0.625rem;
    color: red;
`;

export const ButtonWrapper = styled(FlexContainer)`

    justify-content: space-between;
    border-top: 1px solid var(--color-grey);
    margin-top: 4px;

    button {
        border: none;
        background-color: transparent;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--color-primary);
        padding: 0.375rem 1.6875rem;
        text-decoration: none;
    }
`;

export const ButtonWithBorder = styled.button`

    border-left: 1px solid var(--color-grey);
`;