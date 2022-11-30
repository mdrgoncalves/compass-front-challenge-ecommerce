import styled from "styled-components";
import { font } from "../../styles/mixins";

export const ProductCard = styled.div`

    display: flex;
    gap: 1rem;

    img {
        width: 75px;
        height: 80px;
        border-radius: 0.5rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h3 {
            ${font.bodyMedium};
        }

        p {
            ${font.bodyRegular};
            color: var(--color-low-emphasis);
        }
    }
`;