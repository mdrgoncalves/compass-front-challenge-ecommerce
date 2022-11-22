import styled from "styled-components";

export const ButtonsContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px 11px;
    background-color: var(--color-bright);

    @media (min-width: 985px) {
        display: none;
    }
`;