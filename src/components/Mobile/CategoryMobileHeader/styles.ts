import { font } from './../../../styles/mixins';
import styled from "styled-components";

export const HeaderContainer = styled.div`

    display: flex;
    flex-direction: column;

    h2 {
        ${font.titleRegular};
        margin-bottom: 8px;
        color: var(--color-low-emphasis);
    }
`;

export const TitleContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 20px;
    padding: 1rem 1rem 1rem 0;
    color: var(--color-primary);

    h1::first-letter {
        text-transform: uppercase;
    }
`;