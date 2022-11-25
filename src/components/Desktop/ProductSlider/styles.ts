import styled from 'styled-components';

export const SliderContainer = styled.div`

    display: flex;
    flex-direction: column;

    @media (max-width: 985px) {
        display: none;
    }
`;

export const BigImage = styled.img`

    width: 94.5%;
    margin-top: -25px;
`;

export const ThumbsContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 31px;
    margin: 24px 0 0 0;
    width: 95%;

    button {
        background-color: transparent;
        border: none;
        margin-right: -15px;
        margin-left: -15px;
    }
`;

export const Thumbnail = styled.img`

    width: 12.36%;
    height: 12.36%;
    border-radius: 8px;
`;

export const StorybookDiv = styled.div`

    width: 450px;
    padding-top: 2rem;
`;