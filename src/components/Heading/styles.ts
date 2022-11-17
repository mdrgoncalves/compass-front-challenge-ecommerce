import { font } from './../../styles/mixins';
import styled, { css } from "styled-components";

export const HeadingTag = styled.h2`

    ${props => props.className === 'mobile' && css`
        ${font.titleRegular}
        color: var(--color-high-emphasis);
    `}
    
    ${props => props.className === 'desktop' && css`
        ${font.displayMedium}
        color: var(--color-dark);
    `}
`;