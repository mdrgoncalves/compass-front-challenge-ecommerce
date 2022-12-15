import { WishlistEmpty } from './../Wishlist/styles';
import styled from "styled-components";

export const AddressWrapper = styled.main`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-primary);
        margin-bottom: 0.5rem;
    }

    @media screen and (min-width: 985px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 1rem;
        height: max-content;
    }
`;

export const AddressesEmpty = styled(WishlistEmpty)``;