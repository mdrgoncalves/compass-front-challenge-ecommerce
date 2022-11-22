import styled from "styled-components";
import { font } from "../../../styles/mixins";

export const DeliveryContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 24px 0 40px 0;

    @media (max-width: 985px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 0 18px 0;
    }
`;

export const DeliveryText = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 205px;

    .title {
        ${font.displaySmall};
    }

    .desc {
        ${font.bodyMedium};
        color: var(--color-low-emphasis);
    }

    @media (max-width: 985px) {

        .title {
            ${font.titleRegular};
        }

        .desc {
            ${font.titleMedium};
        }
    }
`