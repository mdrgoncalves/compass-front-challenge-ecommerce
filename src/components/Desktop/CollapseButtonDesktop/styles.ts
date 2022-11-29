import styled from "styled-components";
import { font } from "../../../styles/mixins";

export const ButtonCollapse = styled.button`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(100%, 708px);
    background-color: transparent;
    border: none;
    padding: 10px 0;
    border-bottom: 1px solid #E5E5E5;
    ${font.bodyMedium};
    font-weight: 600;
    color: var(--color-high-emphasis);
`;
