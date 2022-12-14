import styled from "styled-components";

export const GridWrapper = styled.ul`

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    padding: 0 0 0.5rem 3.44rem;
    border-bottom: 1px solid var(--color-grey);

    @media screen and (max-width: 985px) {
        display: none;
    }
`;

export const GridList = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
`;

