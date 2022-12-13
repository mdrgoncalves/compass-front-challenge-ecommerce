import { font } from './../../../styles/mixins';
import styled from "styled-components";

export const ProgressBar = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

    span {
        ${font.labelLarge};
        color: var(--color-low-emphasis);
        font-weight: 600;
    }

    progress {
        width: 100%;
        height: 1.5rem;
    }
`;