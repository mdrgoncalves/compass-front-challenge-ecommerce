import styled from 'styled-components';

export const SpacerContainer = styled.div`

    background-color: var(--color-grey);
    width: calc(100% + 32px);
    height: 8px;
    margin-left: -16px;

    @media (min-width: 985px) {
        display: none;
    }
`;