import styled from "styled-components";
import { font } from "../../../styles/mixins";

export const Title = styled.h1`

    ${font.displayMedium};
    color: var(--color-primary);

    &::first-letter {
        text-transform: uppercase;
    }
`;