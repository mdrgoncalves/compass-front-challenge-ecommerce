import { font } from './../../../styles/mixins';
import styled from 'styled-components';

export const AverageWrapper = styled.div`

    width: 45vw;

    @media screen and (max-width: 985px) {
        width: 83.33vw;
    }
`;

export const AverageHeader = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 985px) {
        margin-bottom: 0.625rem;
    }
`;

export const AverageValue = styled.span`

    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;

    &::after {
        content: '';
        background-image: url('/assets/img/icons/star-icon.svg');
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
        height: 30px;
        width: 30px;
    }

    @media screen and (max-width: 985px) {
        font-size: 1rem;
        font-weight: 600;

        &::after {
            height: 20px;
            width: 20px;
        }
    }
`;

export const AverageTitle = styled.span`

    font-size: 1.5rem;
    font-weight: 600;

    @media screen and (max-width: 985px) {
        ${font.titleRegular};
        color: var(--color-high-emphasis);
    }
`;
