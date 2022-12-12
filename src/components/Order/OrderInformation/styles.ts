import { font } from './../../../styles/mixins';
import styled from "styled-components";

export const OrderSection = styled.section`

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        ${font.displaySmall};
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--color-grey);
    }
`;

export const FlexWrapper = styled.div`

    display: flex;
    justify-content: space-between;

    h3 {
        ${font.bodyMedium};
        color: var(--color-low-emphasis);
    }

    p {
        ${font.bodyMedium};
    }
`;

export const ColumnFlex = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const OrderDetails = styled(ColumnFlex)`

    width: 260px;
`;