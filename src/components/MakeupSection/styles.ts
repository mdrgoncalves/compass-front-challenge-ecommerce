import styled from "styled-components";

export const MakeupContainer = styled.section`

    padding: 0 1rem;
    margin-bottom: 25px;

    h2 {
        margin-bottom: 13px;
    }

    @media (min-width: 985px) {
        margin-bottom: 68px;

        h2 {
            display: none;
        }
    }
`;

export const MakeupGrid = styled.div`

    display: grid; 
    grid-template-columns: auto auto; 
    grid-template-rows: auto auto; 
    gap: 1rem; 
    grid-template-areas: 
        "big-banner big-banner"
        "small-banner-one small-banner-two"; 


    .big-banner {
        grid-area: big-banner;

        img {
            width: 100%;
            max-width: 1240px;
            height: 36.67vw;
            max-height: 400px;
        }
    }

    .small-banner-one,
    .small-banner-two {

        img {
            width: 100%;
            max-width: 604px;
            height: 27.78vw;
            max-height: 228px;
        }
    }

    .small-banner-one {
        grid-area: small-banner-one;
    }

    .small-banner-two {
        grid-area: small-banner-two;
    }
    
    @media (min-width: 985px) {
        gap: 40px 32px;
    }
`;