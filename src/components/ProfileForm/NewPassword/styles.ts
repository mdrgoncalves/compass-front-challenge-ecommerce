import styled from 'styled-components';
import { font } from '../../../styles/mixins';

export const InputWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
        display: flex;
    }

    label {
        ${font.bodyMedium};
    }

    button {
        background: none;
        border: none;
        background-color: var(--color-grey);
        padding: 0 1rem;
    }
`;
