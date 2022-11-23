import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MobileNavContainer = styled.ul`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--color-bright);
    z-index: 3;

    li {
        padding: 1rem 2rem;

        img {
            width: 24px;
            height: 24px;
        }

        @media (max-width: 359px) {
            padding: 1rem 1rem;
        }
    }

    @media (min-width: 985px) {
        display: none;
    }
`

export const NavItem = styled(NavLink)`

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 0.75rem;
        font-weight: 600;
    }

    &.active {
        filter: brightness(0) saturate(100%) invert(29%) sepia(8%) saturate(3044%) hue-rotate(158deg) brightness(95%) contrast(107%);
    }
`;