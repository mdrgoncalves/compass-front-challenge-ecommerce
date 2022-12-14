import { font } from './../../../styles/mixins';
import styled from 'styled-components';

interface Props {
    displayIsNone?: boolean;
    marginBotton?: string;
}

export const InputContainer = styled.div`

    display: flex;
    gap: 1rem;
    ${font.displaySmall};
    color: var(--color-dark);
    margin-bottom: ${(props: Props) => props.marginBotton ? props.marginBotton : '50px'};

    @media (max-width: 985px) {
        display: ${(props: Props) => props.displayIsNone ? 'flex' : 'none'};
    }
`;

export const InputWrapper = styled.div`

    display: flex;
    align-items: center;
    border: 1px solid var(--color-primary);
    border-radius: 4px;

    input {
        width: 25px;
        height: 22px;
        border: none;
        text-align: center;

        &:focus {
            outline: none;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    button {
        width: 24px;
        height: 24px;
        background-color: transparent;
        border: none;
    }
`;