import styled from "styled-components";
import { font } from "../../styles/mixins";

export const PincodeContainer = styled.div`

    display: flex;
    justify-content: space-between;
    background-color: var(--color-grey);
    padding: 1rem;
    width: 69%;

    input,
    button {
        border: none;
        background-color: transparent;
    }

    input {
        width: 100%;
        ${font.bodyMedium};
        color: var(--color-low-emphasis);

        &::placeholder {
            ${font.bodyMedium};
            color: var(--color-low-emphasis);
        }

        &:focus {
            outline: none;
        }
    }

    button {
        ${font.titleRegular};
        color: var(--color-primary);
    }

    @media (max-width: 985px) {

        width: 100%;
    }
`

export const Message = styled.p`

    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-error);
    margin-top: 0.5rem;
`;