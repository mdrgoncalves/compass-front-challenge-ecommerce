import styled from "styled-components";
import { font } from "../../styles/mixins";

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

export const CheckoutMobileContainer = styled.main`

    padding: 0 1rem;
    height: 100vh;
`;

export const WrapperWithTitle = styled.div`

    border-top: 1px solid var(--color-grey);
    padding: 1rem 0;

    h3 {
        ${font.titleRegular};
        margin-bottom: 1rem;
    }
`;

export const FlexWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const ButtonWrapperMobile = styled.div`

    position: sticky;
    bottom: 0;
    left: 0;
    padding: 1rem 0;
    background-color: var(--color-bright);
`;