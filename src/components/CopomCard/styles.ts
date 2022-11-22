import { font } from './../../styles/mixins';
import styled from 'styled-components';

export const CopomContainer = styled.article`

    display: flex;
    align-items: center;
    gap: 21px;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    width: 64.27%;
    min-width: 391px;
    padding: 1rem;
    margin-right: 24px;

    @media (max-width: 985px) {
        gap: 14px;
        padding: 8px;
        min-width: 328px;
        margin-right: 0.5rem;
    }
`;

export const CopomText = styled.div`
    width: 100%;
`

export const CopomDesc = styled.div`

    width: 90%;
    margin-bottom: 0.5rem;

    @media (max-width: 985px) {
        width: 80%;
        ${font.labelMedium};
    }
`;

export const CopomTerms = styled.div`

    font-size: 0.875rem;
    color: var(--color-primary);

    @media (max-width: 985px) {
        font-size: 0.625rem;
    }
`;

export const CodeContainer = styled.div`

    background-color: var(--color-grey);
    padding: 14px;
    text-align: center;
    border-radius: 4px;

    .label {
        font-size: 0.875rem;
        color: var(--color-low-emphasis);
    }

    @media (max-width: 985px) {
        
        .label {
            font-size: 0.625rem;
            color: var(--color-low-emphasis);
        }

        .code {
            ${font.labelMedium};
        }
    }
`;