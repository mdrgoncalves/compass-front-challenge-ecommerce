import { font } from './../../../styles/mixins';
import styled from "styled-components";

export const ModalWrapper = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

export const ModalContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 394px;
    background-color: var(--color-bright);
    position: absolute;
    right: 0.5rem;
    top: 10%;
    padding: 12px 5px 0 12px;
`;

export const CloseContainer = styled.div`

    display: flex;
    gap: 20px;
    padding: 1rem;

    button {
        background-color: transparent;
        border: none;
    }

    h2 {
        ${font.displaySmall};
        color: var(--color-primary);
    }
`;

export const ProductDisplay = styled.div`

    h2 {
        ${font.displaySmall};
    }
`;

export const TotalContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
        display: flex;
        justify-content: space-between;
        padding: 0 9px;
        ${font.labelLarge};
    }

    .total {
        font-weight: 600;
    }
`;

export const CouponContainer = styled.div`

    padding: 0 9px;

    div {
        width: 100%;
    }
`;

export const ButtonContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    padding: 0 9px 10px 9px;

    a {
        font-size: 0.875rem;
        color: var(--color-primary);
        font-weight: 600;
        text-decoration: underline;
    }
`;