import styled from "styled-components";
import { font } from './../../../../styles/mixins';

export const InputSearch = styled.input`

    width: 362px;
    padding: 13px 40px;
    background: var(--color-grey);
    border: none;
    background-image: url('/assets/img/dark-search-icon.svg');
    background-repeat: no-repeat;
    background-position: 8px center;
    border-radius: 4px;
    font-family: 'Inter', sans-serif;

    &::placeholder {
        color: var(--color-low-emphasis);
        ${font.titleMedium}
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;