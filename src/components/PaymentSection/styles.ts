import styled from "styled-components";

export const PaymentWrapper = styled.section`

    display: flex;
    gap: 20px;
`;

export const PaymentOption = styled.label`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    max-width: 160px;
    padding: 12px 1rem 24px 1rem;
    border: 1px solid var(--color-grey);
    border-radius: 0.5rem;
    margin: 35px 0 68px 0;

    input {
        align-self: flex-end;
    }

    img {
        max-height: 40px;
        width: 100%;
    }

    span {
        font-size: 0.875rem;
        font-weight: 500;
    }

    &.active {
        background-color: rgba(99, 149, 153, 0.1)
    }

    .card-img {
        width: 43px;
        height: 33px;
    }
`;

export const CardPaymentWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: rgba(99, 149, 153, 0.1);
    border: 1px solid var(--color-primary-tint);
    border-radius: 0.5rem;
    max-width: 709px;

    input {
        border: 1px solid var(--color-primary);
        border-radius: 4px;
        padding: 12px;
        max-width: 287px;
    }
`;