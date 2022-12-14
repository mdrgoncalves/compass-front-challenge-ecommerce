import { font } from './../../styles/mixins';
import styled from "styled-components";

export const CheckForm = styled.form`

    display: flex;
    gap: 2rem;
    max-width: 710px;
    margin-top: 37px;

    label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
            ${font.bodyMedium};
        }
    }

    input {
        width: 287px;
        padding: 1rem;
        border: none;
        ${font.bodyMedium};
        background-color: var(--color-grey);
    }

    @media screen and (max-width: 985px) {
        flex-direction: column;
        margin-top: 0;

        input {
            width: 100%;
        }
    }
`

export const InputsWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const InputsWrapperRight = styled(InputsWrapper)`

    input {
        width: 391px;
    }

    @media screen and (max-width: 985px) {

        input {
            width: 100%;
        }
    }
`

export const NumberLabel = styled.label`

    .inputs-wrapper {
        display: flex;
        gap: 0.5rem;
    }

    .mobile-country {
        max-width: 80px;
    }

    .mobile-number {
        max-width: 309px;
    }
`;