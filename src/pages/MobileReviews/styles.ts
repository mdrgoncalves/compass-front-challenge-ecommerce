import { font } from './../../styles/mixins';
import styled from "styled-components";

export const MobileReviewsContainer = styled.main`

    overflow-x: hidden;
    min-height: 100vh;
`;

export const ColumnWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem 1rem 0 1rem;
`;

export const TextWrapper = styled.div`

    h2 {
        ${font.bodyMedium};
    }

    h3 {
        ${font.titleMedium};
        color: var(--color-low-emphasis);
    }
`;

export const CarouselWrapper = styled.div`

    margin-left: -0.5rem;

    h2 {
        ${font.titleRegular};
        margin-left: 0.5rem;
    }
`;

export const ReviewWrapper = styled.div`

    padding: 0 1rem;
`;

export const ButtonWrapper = styled.div`

    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.6875rem 1rem;
`;