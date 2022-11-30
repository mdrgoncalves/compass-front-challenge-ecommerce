import styled from "styled-components";

export const CheckoutContainer = styled.main`

    max-width: 1280px;
    min-height: 52.1vh;
    margin: 0 auto;
    padding: 0 20px;
    margin-bottom: 42px;
`;

export const CheckoutContent = styled.div`

    display: flex;
    justify-content: space-between;
`;

export const RightContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 68px;
`;

export const ButtonWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    max-width: 709px;

    a {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--color-primary);
        text-decoration: underline;
        padding: 10px 26px;
    }

    button {
        width: 25%;
    }
`;