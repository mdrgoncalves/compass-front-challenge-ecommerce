import styled from 'styled-components';
import { font } from '../../../styles/mixins';

interface Props {
    maxWidth: number;
}

export const InputWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        ${font.bodyMedium};
    }

    input {
        padding: 1rem;
        background-color: var(--color-grey);
        border: none;
        ${font.titleMedium};
        color: var(--color-low-emphasis);
        width: ${(props: Props) => props.maxWidth ? `${props.maxWidth}px` : 'none'};
    }
`;

export const Error = styled.span`

    font-size: 0.875rem;
    color: var(--color-error);
`;