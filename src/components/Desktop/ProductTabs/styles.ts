import { font } from './../../../styles/mixins';
import styled from 'styled-components';

export const TabsContainer = styled.div`

    width: 100%;
    height: auto;
    border-radius: 2rem;

    @media (max-width: 985px) {
        display: none;
    }
`;

export const TabsNav = styled.ul`

    width: 100%;
    display: flex;
    align-items: center;
    gap: 24px;
    border-radius: 12px;
    background-color: var(--color-grey);
    color: var(--color-low-emphasis);
    ${font.bodyMedium};
    padding: 1rem 0.5rem;
    margin-bottom: 24px;

    li {
        padding: 6px 18px;
        list-style: none;
        text-align: center;
        cursor: pointer;
        border-radius: 0.5rem;

        &:hover {
            background: rgba(50, 224, 196, 0.15);
        }

        &.active {
            background: var(--color-primary);
            color: var(--color-bright);
        }
    }
`;