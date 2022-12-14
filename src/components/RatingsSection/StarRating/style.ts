import styled from "styled-components";

export const StarsWrapper = styled.div`

    display: flex;
    gap: 0.5rem;
`;

export const StarIcon = styled.img`

    cursor: pointer;
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(97%) contrast(104%);
    height: 24px;
    width: 24px;

    &.yellow {
        filter: none;
    }
`