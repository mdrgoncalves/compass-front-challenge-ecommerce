import styled from "styled-components";
import { font } from "../../../styles/mixins";

export const CategoryHeaderContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 27px;

    h1 {
        ${font.displayMedium};
        color: var(--color-primary);
    }
`;

export const PathCategory = styled.h2`

    display: flex;
    align-items: center;
    gap: 0.5rem;
    ${font.bodyMedium};

    .category-previous {
        color: var(--color-primary);
    }

    .category-current {
        color: var(--color-low-emphasis);
    }
`;