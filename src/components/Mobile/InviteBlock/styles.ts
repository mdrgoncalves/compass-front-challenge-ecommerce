import { font } from './../../../styles/mixins';
import styled from 'styled-components';

export const InviteContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 985px) {
        display: none;
    }
`;

export const InviteTextContainer = styled.div`

    padding: 1rem 0;
    width: 70%;

    h2 {
        ${font.titleRegular};
    }

    p {
        ${font.titleMedium};
        color: var(--color-low-emphasis);
    }

    a {
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--color-primary);
        margin-top: 0.5rem;
    }
`;

export const OrangeSquare = styled.div`

    background-color: #FFE6CA;
    display: block;
    width: 94px;
    height: 94px;
    border-radius: 8px;
`;