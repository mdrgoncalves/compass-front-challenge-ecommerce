import styled from 'styled-components';

export const SliderContainer = styled.div`

    display: flex;
    flex-direction: column;
`;

export const BigImage = styled.img`

    width: 47.265%;
    height: 47.265%;
`;

export const ThumbsContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 31px;
    margin: 24px 0 0 5.16%;

    button {
        background-color: transparent;
        border: none;
        margin-right: -15px;
        margin-left: -15px;
    }
`;

export const Thumbnail = styled.img`

    width: 5.86%;
    height: 5.86%;
    border-radius: 8px;
`;