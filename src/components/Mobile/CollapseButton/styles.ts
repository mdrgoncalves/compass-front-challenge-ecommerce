import styled from "styled-components";
import { font } from "../../../styles/mixins";

export const ButtonCollapse = styled.button`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(100%, 769px);
    background-color: transparent;
    border: none;
    padding: 15px 0;
    ${font.titleMedium};
    font-weight: 600;
    color: var(--color-high-emphasis);

    @media (min-width: 985px) {
        display: none;
    }
`;