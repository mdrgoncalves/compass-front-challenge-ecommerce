import styled from "styled-components";
import { font } from "../../styles/mixins";

export const HeaderSectionContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 8px;

    a {
        display: flex;
        align-items: center;
        ${font.labelMedium};
        color: var(--color-primary);
    }

    @media (min-width: 985px) {
        margin-bottom: 24px;

        a {
            ${font.titleRegular};
            display: ${props => props.hidden === true ? 'none' : 'block'};
        }
    }
`;