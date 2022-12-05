import styled from "styled-components";

export const ConfirmedContainer = styled.main`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem 0;
    height: calc(100vh - 440px);

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.5rem;
        width: 500px;
    }

    .buttons {
        display: flex;
        gap: 1rem;

        button {
            width: fit-content;
            padding: 1rem;
        }
    }
`;