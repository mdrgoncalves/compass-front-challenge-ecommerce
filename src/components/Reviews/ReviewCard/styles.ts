import styled from "styled-components";
import { font } from "../../../styles/mixins";

interface Props {
    justify?: boolean;
    gap?: number;
    column?: boolean;
}

export const FlexWrapper = styled.div`

    display: flex;
    flex-direction: ${(props: Props) => props.column ? 'column' : 'row'};
    justify-content: ${(props: Props) => props.justify ? 'space-between' : 'flex-start'};
    gap: ${(props: Props) => props.gap ? `${props.gap}rem` : '0.5rem'};
    width: 332px;
    max-width: 506px;
    max-height: 137px;
`;

export const DateText = styled.p`

    ${font.labelMedium};
    color: var(--color-low-emphasis);
`;

export const ProductText = styled.h3`

    ${font.bodyMedium};
`;

export const CommentTitle = styled.h4`

    ${font.titleMedium};
`;

export const CommentText = styled.p`

    ${font.titleMedium};
    color: var(--color-low-emphasis);
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`;