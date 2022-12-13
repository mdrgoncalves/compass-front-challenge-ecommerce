import styled from "styled-components";
import { font } from "../../../styles/mixins";

export const RatingCardWrapper = styled.article`

    display: flex;
    gap: 2.5rem;
    padding: 1rem 0;
`;

export const RatingValue = styled.div`

    background-color: var(--color-grey);
    border-radius: 4px;
    padding: 1rem;

    span {
        display: flex;
        align-items: center;
        font-size: 8.125rem;

        &::after {
            content: '';
            background-image: url('/assets/img/icons/star-icon.svg');
            background-repeat: no-repeat;
            background-size: contain;
            display: block;
            height: 10.16vw;
            width: 10.16vw;
        }
    }

    @media screen and (max-width: 985px) {
        padding: 0.75rem;

        span {
            font-size: 1rem;
            font-weight: 600;
            gap: 3px;

            &::after {
                height: 20px;
                width: 20px;
            }
        }
    }
`

export const RatingContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 0.5rem;

    @media screen and (max-width: 985px) {
        gap: 0.75rem;
    }
`;

export const RatingHeader = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
        font-size: 1.1rem;
    }

    p {
        font-size: 0.875rem;
    }

    @media screen and (max-width: 985px) {
        gap: 0.1875rem;

        h4 {
            ${font.titleRegular};
        }

        p {
            ${font.titleMedium};
            color: var(--color-low-emphasis);
        }
    }
`;

export const RatingComment = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-right: 2rem;

    h3 {
        font-size: 1rem;
    }

    @media screen and (max-width: 985px) {

        h3 {
            ${font.titleRegular};
        }

        p {
            ${font.titleMedium};
            color: var(--color-low-emphasis);
        }
    }
`;

export const FlexWrapper = styled.div`

    display: flex;
    align-items: center;
    gap: 0.75rem;
`;