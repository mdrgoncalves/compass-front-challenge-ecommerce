import { WishlistEmpty } from './../Wishlist/styles';
import styled from "styled-components";

export const AddressWrapper = styled.main`

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;

    h2 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-primary);
        margin-bottom: 0.5rem;
    }

    @media screen and (min-width: 985px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2.5rem;
        margin-top: 1rem;
    }
`;

export const AddressesEmpty = styled(WishlistEmpty)``;