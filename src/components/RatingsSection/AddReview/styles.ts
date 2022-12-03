import styled from "styled-components";

export const PostReviewContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 45vw;

    h3 {
        font-size: 1.5rem;
    }

    input,
    textarea {
        border: none;
        background-color: var(--color-grey);
        border-radius: 4px;
        padding: 1rem;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    textarea {
        resize: none;
        height: 6rem;
    }

    button {
        margin-top: 0.5rem;
        width: 150px;
    }
`


export const PostReviewContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`