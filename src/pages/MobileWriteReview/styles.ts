import { font } from './../../styles/mixins';
import styled from "styled-components";

interface Props {
    margin?: string;
}

export const WriteReviewContainer = styled.main`

    padding: 0 1rem;
    height: 100vh;
`;

export const WrapperWithMargin = styled.div`

    margin: ${(props: Props) => props.margin};
`;

export const TitleText = styled.h2`

    ${font.titleRegular};
    margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`

    width: 100%;
    border: 0;
    background-color: var(--color-grey);
    resize: none;
    border-radius: 0.25rem;
    height: 96px;
    padding: 1rem;
    ${font.titleMedium}
`;

export const ButtonWrapper = styled.div`

    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.6875rem 1rem;
`;