import { font } from './../../styles/mixins';
import styled from "styled-components";

export const TableContainer = styled.div`

    width: 55.39vw;
    max-width: 710px;
`;

export const TableHeader = styled.div`

    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e0e0e0;

    span {
        ${font.bodyMedium};
        color: var(--color-low-emphasis);
    }

    div {
        display: flex;
        gap: 67px
    }
`;
