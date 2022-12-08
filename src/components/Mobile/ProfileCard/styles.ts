import { font } from './../../../styles/mixins';
import styled from 'styled-components';

export const ProfileWrapper = styled.article`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--color-grey);
    border-radius: 0.5rem;
`;


export const ProfileIcon = styled.img`

    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid black;
`;

export const ProfileContent = styled.div`

    display: flex;
    align-items: center;
    gap: 0.875rem;
`;


export const ProfileText = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
        ${font.displaySmall};
    }

    p {
        ${font.titleMedium};
        color: var(--color-low-emphasis);
    }
`;
