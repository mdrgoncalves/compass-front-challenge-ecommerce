import { font } from './../../../../styles/mixins';
import styled from 'styled-components';

export const SortContainer = styled.div`

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