import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { font } from "../../../../styles/mixins";

export const GridItem = styled.li`

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 1rem;
    align-items: center;
    background-color: var(--color-grey);
    border-radius: 0.5rem;
    padding: 1.1875rem 1.5rem;
    color: var(--color-high-emphasis);

    p, 
    label {
        ${font.bodyMedium};
    }

    div {
        display: flex;
        gap: 0.75rem;
    }

    @media screen and (max-width: 985px) {
        grid-template-columns: 1fr;
        row-gap: 0.5rem;

        input {
            display: none;
        }
    }
`;

export const DateText = styled.p`

    width: 80%;

    @media screen and (max-width: 985px) {
        order: -1;
        ${font.labelMedium};
        color: var(--color-low-emphasis);
        font-size: 0.75rem !important;
    }
`;

export const PriceText = styled.p`

    margin-left: 8%;

    @media screen and (max-width: 985px) {
        margin-left: 0;
    }
`;

export const StatusText = styled.p`

    margin-left: 20%;
    color: var(--color-primary);

    &::first-letter {
        text-transform: uppercase;
    }

    @media screen and (max-width: 985px) {
        display: none;
    }
`;

export const ChevronRight = styled(NavLink)`

    justify-self: flex-end;

    @media screen and (max-width: 985px) {
        margin-top: -30%;
    }
`;

export const ButtonWrapper = styled.div`

    justify-self: flex-end;
    align-items: flex-end;
    grid-column: span 5;

    button {
        padding: 0.625rem;
    }
`;