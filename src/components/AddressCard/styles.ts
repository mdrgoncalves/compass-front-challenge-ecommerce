import styled from "styled-components";
import { font } from "../../styles/mixins";

interface Props {
    withBorder?: boolean;
}

export const ColumnFlex = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: ${(props: Props) => props.withBorder ? '1px solid var(--color-grey)' : 'none'};
    border-radius: 0.5rem;
    padding: 0.5rem;

    h3 {
        ${font.bodyMedium};
        color: var(--color-low-emphasis);
    }

    p {
        ${font.bodyMedium};
    }
`;