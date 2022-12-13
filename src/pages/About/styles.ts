import { font } from './../../styles/mixins';
import styled from "styled-components";

export const AboutContainer = styled.main`

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 9.14vw;
`;

export const ColumnFlex = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const AboutContent = styled.div`

    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media screen and (max-width: 985px) {
        padding: 0 1rem;
    }
`;

export const CenterDiv = styled.div`

    text-align: center;
    max-width: 713px;
    margin: 0 auto;

    @media screen and (max-width: 985px) {
        text-align: justify;

        h2 {
            text-align: center;
        }
    }
`;

export const TitleText = styled.h2`

    ${font.displaySmall};
    margin-bottom: 0.5rem;
`;

export const ParagraphText = styled.p`

    ${font.bodyMedium};
    color: var(--color-low-emphasis);
`;

export const FlexWrapper = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 985px) {
        flex-direction: column;

        img {
            width: 100%;
            order: 2;
        }
    }
`;

export const TextContainer = styled.div`

    max-width: 510px;

    @media screen and (max-width: 985px) {
        text-align: justify;
    }
`;

export const Banner = styled.img`

    width: 100%;
    max-width: 1920px;
    max-height: 400px;
    object-fit: cover;

    @media screen and (max-width: 985px) {
        display: none;
    }
`;

export const MobileHeader = styled.header`

    padding: 1rem;
`;