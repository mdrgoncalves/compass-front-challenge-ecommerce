import styled from 'styled-components';

export const ProfileContainer = styled.main`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 20vh;

    .menu-list {
        margin-bottom: 2.5rem;

        nav {
            padding: 0;
        }
    }
`;

export const FlexWrapper = styled.div`

    display: flex;
    gap: 1.375rem;
`;

export const ButtonWrapper = styled.div`

    display: flex;
    justify-content: flex-end;

    button {
        width: 136px;
    }
`;