import { font } from './../../../styles/mixins';
import styled from "styled-components";

export const TrendingContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: calc(100vw - 32px);
    gap: 0.5rem;
    padding: 1rem 0;

    h2 {
        ${font.titleRegular};
        font-weight: 600;
    }

    @media (min-width: 985px) {
        display: none;
    }
`;