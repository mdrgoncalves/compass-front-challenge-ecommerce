import styled from 'styled-components';
import { font } from '../../../styles/mixins';

export const FlexWrapper = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;

    @media screen and (max-width: 985px) {
        margin: 0 auto;
    }
`;

export const ProfileIcon = styled.img`

    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid black;
`;

export const ButtonWrapper = styled(FlexWrapper)`

    align-self: flex-end;
    margin: 0;

    input[type='file'] {
        display: none;
    }

    label {
        cursor: pointer;
        background-color: var(--color-primary);
        color: var(--color-bright);
        ${font.titleMedium};
        font-size: 0.875rem !important;
        padding: 0.875rem 0;
        width: 136px;
        text-align: center;
        border-radius: 0.5rem;
    }

    button {
        padding: 10px 0;
        ${font.titleMedium};
        width: 136px;
        border: 0;
    }

    @media screen and (max-width: 985px) {
        flex-direction: column;
    }
`;
