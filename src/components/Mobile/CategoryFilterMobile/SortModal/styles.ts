import { font } from './../../../../styles/mixins';
import styled from 'styled-components';

export const SortModalWrapper = styled.div`

    position: absolute;
    top: -95vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`


export const SortContainer = styled.div`

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: var(--color-bright);
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;

    h2 {
        ${font.titleRegular};
        color: var(--color-low-emphasis);
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        margin-bottom: 1rem;
    }

    fieldset {
        border: none;
        display: flex;
        flex-direction: column;
        gap: 10.25px;
    }

    span {
        ${font.bodyMedium};
        color: var(--color-low-emphasis);
        margin-left: 4px;
    }
`;