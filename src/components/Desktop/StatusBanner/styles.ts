import styled from "styled-components";
import { font } from './../../../styles/mixins';

export const StatusContainer = styled.div`

    padding: 16px 0;
    background-color: #F0F0F0;
    ${font.labelLarge};
    color: var(--color-high-emphasis);
    text-align: center;
    
    @media (max-width: 985px) {
        display: none;
    }

    a {
        color: var(--color-primary);
        text-decoration: underline;
        cursor: pointer;
    }
`;