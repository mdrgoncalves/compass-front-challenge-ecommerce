import { font } from './../../../styles/mixins';
import styled from 'styled-components';

export const OtpContainer = styled.main`

    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3.625rem 1rem;

    @media screen and (min-width: 768px) {
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 985px) {
        height: calc(100vh - 440px);
    }
`;

export const OtpContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const InputWrapper = styled.div`

    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.875rem;
`;

export const Input = styled.input`

    max-width: 52px;
    padding: 0.75rem 0.5rem;
    background-color: var(--color-grey);
    border: none;
    ${font.titleMedium};
    color: var(--color-low-emphasis);
`;

export const PhoneMessage = styled.p`

    ${font.titleMedium};
    color: var(--color-low-emphasis);

    span {
        color: var(--color-primary);
        font-weight: 600;
    }
`;

export const ButtonWrapper = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 131px;

    @media screen and (min-width: 985px) {
        margin-top: 95px;
    }
`;