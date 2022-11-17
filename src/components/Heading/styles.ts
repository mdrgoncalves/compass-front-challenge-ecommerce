import { font } from './../../styles/mixins';
import styled from "styled-components";

export const HeadingTag = styled.h2`

    ${font.titleRegular}
    color: var(--color-high-emphasis);

    color: ${props => props.color == 'true' && 'var(--color-bright)'};

    @media screen and (min-width: 985px) {
        ${font.displayMedium}
        color: var(--color-dark);
        color: ${props => props.color == 'true' && 'var(--color-bright)'};
    }
`;