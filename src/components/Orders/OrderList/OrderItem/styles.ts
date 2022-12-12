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
`;

export const DateText = styled.p`

    width: 80%;
`;

export const PriceText = styled.p`

    margin-left: 8%;
`;

export const StatusText = styled.p`

    margin-left: 20%;
    color: var(--color-primary);

    &::first-letter {
        text-transform: uppercase;
    }
`;

export const ChevronRight = styled(NavLink)`

    justify-self: flex-end;
`;

export const ButtonWrapper = styled.div`

    justify-self: flex-end;
    align-items: flex-end;
    grid-column: span 5;

    button {
        padding: 0.625rem;
    }
`;