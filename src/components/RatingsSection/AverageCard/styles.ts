import styled from 'styled-components';

export const AverageWrapper = styled.div`

    width: 45vw;
`;

export const AverageHeader = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const AverageValue = styled.span`

    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;

    &::before {
        content: '';
        background-image: url('/assets/img/icons/star-icon.svg');
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
        height: 30px;
        width: 30px;
    }
`;

export const AverageTitle = styled.span`

    font-size: 1.5rem;
    font-weight: 600;
`;
