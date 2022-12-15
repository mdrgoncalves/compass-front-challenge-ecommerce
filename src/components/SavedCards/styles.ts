import styled from "styled-components";
import { font } from "../../styles/mixins";

export const CardWrapper = styled.main`

    display: flex;
    gap: 1rem;

    @media screen and (max-width: 985px) {
        flex-direction: column;
    }
`;

export const CardItem = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    background-color: var(--color-primary);
    color: var(--color-bright);
    padding: 0 2rem 2rem 2rem;
    border-radius: 0.5rem;
    height: max-content;

    h2 {
        font-size: 1rem;
        color: var(--color-primary);
    }

    p {
        ${font.bodyMedium};
    }
`;
