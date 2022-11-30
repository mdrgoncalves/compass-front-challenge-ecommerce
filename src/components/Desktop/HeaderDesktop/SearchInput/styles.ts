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

export const ResultsList = styled.ul`

    width: 362px;
    height: auto;
    overflow-y: scroll;
    position: absolute;
    top: 73px;
    background: var(--color-grey);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 40px 0.5rem 40px;
    border: 1px solid var(--color-high-emphasis);

    @media (max-width: 1100px) {
        width: 100%;
    }

    li {
        padding: 0.5rem 0px;

        a {
            color: var(--color-primary);
            font-size: 0.875rem;
        }

        &:hover {
            background: rgba(0, 0, 0, 0.08);
        }
    }
`;