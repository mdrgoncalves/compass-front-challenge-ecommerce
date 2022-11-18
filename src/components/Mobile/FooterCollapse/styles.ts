import { font } from './../../../styles/mixins';
import styled from "styled-components";

export const ButtonCollapse = styled.button`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(100%, 769px);
    background-color: transparent;
    border: none;
    padding: 15px 16px;
    ${font.titleMedium};
    color: var(--color-low-emphasis);
`;