import styled from "styled-components";
import { font } from './../../../styles/mixins';

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 29px 20px;

    @media (max-width: 985px) {
        display: none;
    }
`;

export const MenuContainer = styled.div`

    display: flex;
    align-items: center;

    a {
        margin-right: 32px;
    }
`;

export const ListContainer = styled.div`

    display: flex;
    gap: 20px;

    a {
        color: var(--color-high-enphasis);
        ${font.titleMedium}
        
        &:hover {
            color: var(--color-highlight);
        }
    }
`;

export const ButtonsContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 20px;

    input {
        margin-right: 4px;
    }
`;