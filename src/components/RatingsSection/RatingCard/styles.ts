import styled from "styled-components";

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

        &::before {
            content: '';
            background-image: url('/assets/img/icons/star-icon.svg');
            background-repeat: no-repeat;
            background-size: contain;
            display: block;
            height: 10.16vw;
            width: 10.16vw;
        }
    }
`

export const RatingContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 0.5rem;
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
`;

export const RatingComment = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-right: 2rem;

    h3 {
        font-size: 1rem;
    }
`;