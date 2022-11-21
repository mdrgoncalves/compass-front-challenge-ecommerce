import { font } from './../../../styles/mixins';
import styled from 'styled-components';

export const GridFilterContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        ${font.bodyMedium};
    }
`;

export const ShowFilterContainer = styled.div`

    display: flex;
    gap: 13px;

    img {
        margin-right: 4px;
    }
`;

export const FlexContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 4px;
`;

export const NumberInput = styled.input`

    width: 65px;
    padding: 1rem 24px 1rem 1rem;
    background-color: var(--color-grey);
    border: none;
    text-align: center;
    ${font.bodyMedium};
    color: var(--color-low-emphasis);
`

export const SortInput = styled.select`

    padding: 1rem 48px 1rem 1rem;
    background-color: var(--color-grey);
    border: none;
    ${font.bodyMedium};
    color: var(--color-low-emphasis);
`