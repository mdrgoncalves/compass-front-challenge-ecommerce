import styled from "styled-components";
import { font } from './../../../styles/mixins';

export const PaginationWrapper = styled.div`

    display: flex;
    gap: 8px;
`;

export const PaginationContainer = styled.ul`

    display: flex;
    gap: 2.25px;
    background-color: var(--color-grey);
    padding: 4px;
    border-radius: 12px;
    width: max-content;
`;

export const PaginationButton = styled.button`

    padding: 6px 18px;
    border-radius: 8px;
    border: transparent;
    background-color: transparent;
    ${font.labelMedium};
    color: var(--color-low-emphasis);

    &:hover {
        background-color: var(--color-low-emphasis);
        color: var(--color-bright);;
    }

    &.active {
        background-color: var(--color-primary);
        color: var(--color-bright);   
    }
`;
