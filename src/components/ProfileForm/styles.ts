import styled from 'styled-components';
import { font } from '../../styles/mixins';

interface Props {
    gap: string;
}

export const FormWrapper = styled.form`

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
`;

export const FlexWrapper = styled.div`

    display: flex;
    align-items: center;
    gap: ${(props: Props) => props.gap ? props.gap : '0'};

    label {
        ${font.bodyMedium};
    }

    @media screen and (max-width: 985px) {
        flex-direction: column;
        align-items: normal;
        gap: 1rem;
    }
`;

export const FlexColumn = styled(FlexWrapper)`

    flex-direction: column;
    align-items: normal;

    h2 {
        ${font.displaySmall};
        padding: 0.5rem 0;
        margin: 0.8125rem 0;
        border-bottom: 1px solid var(--color-grey);
    }
`;

export const ButtonWrapper = styled.div`

    display: flex;
    justify-content: flex-end;
    
    button {
        width: 136px;
    }
`;