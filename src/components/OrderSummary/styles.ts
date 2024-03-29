import styled from 'styled-components';
import { font } from './../../styles/mixins';

export const SummaryContainer = styled.div`

    width: 32.11vw;
    max-width: 411px;

    h2 {
        ${font.displaySmall};
        color: var(--color-dark);
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #e0e0e0;
        margin: 1rem 0;
    }

    p {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 985px) {
        width: 100%;

        h2 {
            ${font.titleRegular};
        }

        p {
            ${font.titleMedium};
        }
    }
`;

export const SummaryContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-right: 23px;
    padding-top: 1rem;
`;

export const SummaryLabel = styled.span`

    ${font.bodyMedium};
    color: var(--color-low-emphasis);
`

export const TotalText = styled.p`

    span {
        font-weight: 600;
    }
`;

export const SummaryButtons = styled.div`

    display: flex;
    gap: 2rem;
    margin-top: 40px;
`;

export const ImagesWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 24px 0 48px 0;
`;
