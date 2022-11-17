import styled from "styled-components";
import { font } from "../../styles/mixins";

export const ArrivalsContainer = styled.section`

    margin: 0 0 24px 20px;

    @media (min-width: 985px) {
        margin: 0 0 35px 20px;
    }
`;

export const ArrivalsContent = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 8px;

    h2 {
        ${font.titleRegular};
        color: var(--color-dark);

        @media (min-width: 985px) {
            ${font.displayMedium};
        }
    }

    a {
        display: flex;
        align-items: center;
        ${font.labelMedium};
        color: var(--color-primary);

        @media (min-width: 985px) {
            ${font.titleRegular};
        }
    }

    @media (min-width: 985px) {
        margin-bottom: 24px;

        h2 {
            ${font.displayMedium};
        }

        a {
            ${font.titleRegular};
        }
    }
`;