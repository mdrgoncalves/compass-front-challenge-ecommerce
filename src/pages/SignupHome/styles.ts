import styled from 'styled-components';

export const HomeContainer = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    background-image: url('/assets/img/background/signup-bg.png');
    background-size: contain;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 1rem;
    padding-bottom: 2rem;

    h1 {
        font-size: 1.875rem;
        font-weight: 700;
        line-height: 42px;
        margin-bottom: 1.125rem;
    }

    @media screen and (min-width: 768px) {
        background-size: 100vw 164vh;
    }

    @media screen and (min-width: 985px) {
        justify-content: center;
        height: calc(100vh - 440px);
        background-position: center -95vh;
        background-size: 100vw 200vh;
    }
`;

export const HomeContent = styled.div`

    @media screen and (min-width: 985px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: rgba(241, 237, 239, 0.95);
        padding: 5rem 2rem;
        border-radius: 0.5rem;
    }
`;

export const ButtonWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    .button {
        background: none;
        border: none;
        font-size: 0.875rem;
        font-weight: 600;
    }

    @media screen and (min-width: 985px) {
        gap: 1rem;
    }
`;
