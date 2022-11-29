import styled from "styled-components";

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