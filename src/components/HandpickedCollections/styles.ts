import styled from "styled-components";

export const CollectionContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 13px;
    background-color: var(--color-primary) ;
    padding: 4.44vw;
    margin-bottom: 24px;

    @media (min-width: 985px) {
        gap: 24px;
        padding: 32px 20px 42px 20px;
        margin-bottom: 67px;
    }
`

export const HandpickedContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    img {
        width: min(43.33vw, 280px);
        height: min(41.67vw, 280px);
    }

    @media (min-width: 768px) {

        img {
            width:  100%;
            height: 100%;
        }
    }

    @media (min-width: 985px) {
        grid-gap: 30px;
        align-items: center;
        justify-content: center;

        img {
            width:  100%;
        }
    }

    @media (min-width: 1025px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 40px;

        img {
            width:  280px;
            height: 280px;
        }
    }
`;
