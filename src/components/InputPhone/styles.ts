import { font } from './../../styles/mixins';
import styled from 'styled-components';

export const InputsWrapper = styled.div`

    display: flex;
    gap: 0.75rem;
    width: 100%;
`;

export const DddInput = styled.input`

    background-color: var(--color-grey);
    width: 52px;
    padding: 0.75rem 0.5rem;
    ${font.titleMedium};
    border: none;
`;

export const PhoneInput = styled(DddInput)`

    width: 100%;
    padding: 0.75rem 1rem;
`;