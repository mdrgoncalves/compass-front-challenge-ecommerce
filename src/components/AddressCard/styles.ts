import styled from "styled-components";
import { font } from "../../styles/mixins";

export const ColumnFlex = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
        ${font.bodyMedium};
        color: var(--color-low-emphasis);
    }

    p {
        ${font.bodyMedium};
    }
`;