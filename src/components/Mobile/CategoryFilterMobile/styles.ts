import { font } from './../../../styles/mixins';
import styled from "styled-components";

export const FiltersContainer = styled.div`

    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    background-color: var(--color-bright);
`;

export const FilterButton = styled.button`

    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 15.83vw;
    border: none;
    background-color: var(--color-bright);
    ${font.titleMedium};

    @media screen and (max-width: 319px) {
        padding: 16px 2.1rem;
    }
`;

export const StorybookDiv = styled.div`

    width: 360px;

    div {
        position: relative;
    }
`;