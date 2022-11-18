import styled from "styled-components";
import { font } from "../../../../styles/mixins";

export const FilterContainer = styled.div`
    padding: 10px 0;

    label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }

    span {
        ${font.bodyMedium};
        color: var(--color-low-emphasis);
    }

    input {
        transform: scale(1.4);

        &:checked {
            accent-color: var(--color-primary);
        }
    }

`;