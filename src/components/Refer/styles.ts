import styled from "styled-components";
import { font } from "../../styles/mixins";

export const ReferWrapper = styled.main`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    margin-top: 4.125rem;

    button {
        margin: 0 auto;
    }

    @media (min-width: 985px) {
        margin-top: 2rem;
    }
`;

export const ImageWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        margin-bottom: 1rem;
    }

    h2 {
        ${font.titleMedium};
        margin-bottom: 2rem;
        width: 80%;
    }

    p {
        ${font.link};
        color: var(--color-low-emphasis);
        margin-top: 0.5rem;
    }
`;

export const Code = styled.h3`

    display: inline-block;
    padding: 0.6875rem 0;
    border: 2px solid var(--color-primary);
    border-style: dashed;
    border-radius: 0.5rem;
    width: 240px;
    text-align: center;
    ${font.titleMedium};
`;


export const TextWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    h4 {
        ${font.titleRegular};
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 95%;
    }

    li {
        ${font.titleMedium};
        color: var(--color-low-emphasis);
        list-style: inside;
    }
`;

