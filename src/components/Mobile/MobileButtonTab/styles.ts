import { Link } from "react-router-dom";
import styled from "styled-components";
import { font } from "../../../styles/mixins";

export const ButtonTab = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(100%, 769px);
    background-color: transparent;
    border: none;
    ${font.titleMedium};
    font-weight: 600;
    padding: 1rem 0;
    color: var(--color-high-emphasis);

    @media (min-width: 985px) {
        display: none;
    }
`;