import styled from 'styled-components';

export const PageContainer = styled.main`

    width: 100%;
    height: calc(100vh - 440px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PageContent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    h1 {
        font-size: 10rem;
    }

    .desc {
        width: 60%;
        color: var(--color-low-emphasis);
    }
`;