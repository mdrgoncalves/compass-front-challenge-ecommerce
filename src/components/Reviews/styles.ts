import styled from "styled-components";

export const EmptyText = styled.h2`

    color: var(--color-primary);
    margin-top: 2rem;
`;

export const ReviewsWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
        display: none;
        color: var(--color-primary);

        @media screen and (min-width: 985px) {
            display: block;
        }
    }

    button {
        background: none;
        border: none;
    }
`;