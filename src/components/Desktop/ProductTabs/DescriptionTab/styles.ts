import { font } from './../../../../styles/mixins';
import styled from 'styled-components';

export const TextContainer = styled.div`

    width: 91%;
    ${font.bodyMedium};
    color: var(--color-low-emphasis);
    white-space: pre-line;
    padding-bottom: 26px;
`;