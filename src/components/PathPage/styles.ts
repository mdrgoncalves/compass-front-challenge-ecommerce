import styled from "styled-components";
import { font } from "../../styles/mixins";

export const PathContainer = styled.h2`

    display: flex;
    align-items: center;
    gap: 0.5rem;
    ${font.bodyMedium};

    a {
        color: var(--color-primary);

        &::first-letter {
            text-transform: uppercase;
        }
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-low-emphasis);
    }
`;