import { font } from './../../styles/mixins';
import styled from 'styled-components';

export const PhoneContainer = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem 1rem;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (min-width: 985px) {
        justify-content: center;
        height: calc(100vh - 440px);
    }
`;

export const PhoneContent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 400px;
        text-align: center;
    }
`;

export const PhoneMessage = styled.p`

    ${font.titleMedium};
    color: var(--color-low-emphasis);
    align-self: flex-start;
    width: 200px;
    margin-bottom: 102px;

    @media screen and (min-width: 768px) {
        width: 100%;
        align-self: center;
    }
`;