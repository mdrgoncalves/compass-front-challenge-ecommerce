import styled from "styled-components";
import { font } from "../../../styles/mixins";

export const TableItem = styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 10px;
`;

export const TableItemInfo = styled.div`

    display: flex;
    gap: 1rem;

    img {
        width: 75px;
        height: 80px;
        border-radius: 0.5rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h3 {
            ${font.bodyMedium};
        }

        p {
            ${font.bodyRegular};
            color: var(--color-low-emphasis);
        }
    }
`;

export const TableItemValues = styled.div`

    display: flex;
    flex-direction: column;
    gap: 45px;
`;

export const TableItemPrices = styled.div`

    display: flex;
    gap: 90px;
`;

export const TableItemButtons = styled.div`

    display: flex;
    gap: 56px;
    margin-left: 12px;

    a, button {
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: underline;
    }

    a {
        color: var(--color-primary);
    }

    button {
        color: var(--color-error);
        background: none;
        border: none;
        cursor: pointer;
    }
`;