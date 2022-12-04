import { font } from './../../../../styles/mixins';
import styled from "styled-components";

export const MenuNav = styled.nav`

    padding: 1rem;

    h2 {
        ${font.titleMedium};
        color: var(--color-low-emphasis);
        padding: 12px 0 4px 0;
    }
`;