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