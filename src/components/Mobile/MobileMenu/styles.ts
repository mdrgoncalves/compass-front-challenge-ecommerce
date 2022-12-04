import { font } from './../../../styles/mixins';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MobileMenuOuter = styled.div`

    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
`;

export const MobileMenuWrapper = styled.div`

    width: 82.5vw;
    height: 100vh;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: var(--color-bright);

    .spacer {
        
        div {
            width: calc(100% + 16px);
        }
    }

    @media screen and (min-width: 985px){
        display: none;
    }
`;

export const ProfileLink = styled(Link)`

    padding: 1rem;

    .profile-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-grey);
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 0 1rem;

        div {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        h2 {
            ${font.bodyMedium}; 
            color: var(--color-high-emphasis);
        }
    }
`;

export const ProfileIcon = styled.img`

    border-radius: 50%;
    width: 42px;
    height: 42px;
`;

export const RightChevron = styled.img`

    width: 24px;
    height: 24px;
`;