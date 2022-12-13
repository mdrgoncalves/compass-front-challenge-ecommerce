import styled from 'styled-components';

interface Props {
    justify?: boolean;
}

export const ProfileContainer = styled.main`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
    max-width: 1280px;
    margin: 0 auto;

    .menu-list {
        margin-bottom: 2.5rem;

        nav {
            padding: 0;
        }
    }

    @media screen and (min-width: 985px) {
        margin-bottom: 10vh;
    }
`;

export const FlexWrapper = styled.div`

    display: flex;
    justify-content: ${(props: Props) => (props.justify ? 'space-between' : 'flex-start')};
    gap: 1.375rem;
`;

export const ButtonWrapper = styled.div`

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 0.45rem;

    button {
        width: 136px;
        height: 40px;
    }
`;