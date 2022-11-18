import { font } from './../../../../styles/mixins';
import styled from "styled-components";

export const ButtonCollapse = styled.button`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(100%, 286px);
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--color-light-text);
    padding-bottom: 13px;
    margin-bottom: 1rem;
    ${font.bodyMedium};
`;