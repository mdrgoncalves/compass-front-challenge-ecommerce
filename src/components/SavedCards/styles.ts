import styled from "styled-components";
import { font } from "../../styles/mixins";

export const CardItem = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;

    h2 {
        font-size: 1rem;
        color: var(--color-primary);
    }

    p {
        ${font.bodyMedium};
    }
`;
