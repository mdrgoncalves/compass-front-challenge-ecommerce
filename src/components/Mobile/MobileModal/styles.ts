import styled from "styled-components";

export const ModalWrapper = styled.div`

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    background-color: var(--color-bright);
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;
`;