import styled from "styled-components";
import { font } from './../../../styles/mixins';

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 16px;
    width: 100%;
    max-width: 768px;

    @media screen and (min-width: 985px) {
        display: none;
    }
`;

export const MobileMenuContainer = styled.div`
    display: flex;
    gap: 20px;

    h1 {
        ${font.displaySmall};
        color: var(--color-primary);
    }
`;

export const MobileButtonsContainer = styled.div`

    display: flex;
    gap: 24px;
`;

export const StorybookDiv = styled.div`

    width: 360px;

    header {
        display: flex;
    }
`;