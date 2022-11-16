import styled from "styled-components";

export const CarouselContainer = styled.div`

    position: relative;
    overflow: hidden;
    padding-left: 1rem;
    margin: 8px 0 25px 0;
`;

export const CarouselContent = styled.div`

    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    --ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        scroll-snap-align: start;
        margin-left: 0.5rem;
    }
`;