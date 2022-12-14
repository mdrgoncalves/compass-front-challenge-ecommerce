import styled from "styled-components";
import { font } from "../../styles/mixins";

export const BagContainer = styled.main`

    max-width: 1280px;
    min-height: 52.1vh;
    margin: 0 auto;
    padding: 0 20px;
`

export const BagContent = styled.div`

    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    .bag-content {

        &__left {
            display: flex;
            flex-direction: column;
            gap: 68px;
        }
    }

    .collapse-children {
        max-width: 608.4px;
        margin-top: 29px;
    }
`

export const MobileBagContainer = styled.main`

    height: calc(100vh - 56px);
`;

export const CardsWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: var(--color-grey);
    padding: 1rem 0;
`;

export const InputWrapper = styled.div`

    background-color: var(--color-grey);
    padding: 1rem 1rem 2.875rem 1rem;

    --mask:
        radial-gradient(5.30px at 50% calc(100% - 6.75px),#000 99%,#0000 101%) calc(50% - 10px) 0/20px 100%,
        radial-gradient(5.30px at 50% calc(100% + 1.75px),#0000 99%,#000 101%) 50% calc(100% - 5px)/20px 100% repeat-x;
    -webkit-mask: var(--mask);
            mask: var(--mask);

    div {
        background-color: var(--color-bright);
    }
`;

export const WrapperWithPadding = styled.div`

    padding: 0 1rem;
`;

export const ButtonWrapper = styled(WrapperWithPadding)`

    display: flex;
    align-items: center;
    gap: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;

    button {
        max-width: 208px;
        height: 44px;
    }
`;

export const PriceLabel = styled.p`

    ${font.labelMedium};
    color: var(--color-low-emphasis);
`;

export const PriceValue = styled.p`

    ${font.bodyMedium};
`;

export const BagEmpty = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: calc(100vh - 56px);

    img {
        margin-bottom: 1.875rem;
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    p {
        ${font.bodyMedium};
    }

    div {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
    }
`;