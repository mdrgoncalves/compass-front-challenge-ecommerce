import styled from "styled-components";
import { font } from "../../styles/mixins";

export const FooterContainer = styled.footer`

    background-color: var(--color-primary);
    padding: 60px 32px;
    width: 100%;

    @media (max-width: 985px) {
        padding: 0; 
    }
`;

export const FooterWrapper = styled.div`

    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;

    @media (max-width: 985px) {
        flex-direction: column;
    }
`;

export const ColumnsContainer = styled.div`

    display: flex;
    gap: 68px;
    

    h3 {
        font-size: 1rem;
        color: var(--color-bright);
        margin-bottom: 12px;
    }

    a {
        color: var(--color-light-text);

        &:hover {
            color: var(--color-bright);
        }
    }

    @media (max-width: 985px) {
        flex-direction: column;
        gap: 24px;
        padding: 24px 16px; 
        margin-bottom: 12px;

        .about-menu {
            order: 3;
        }
    }
`;

export const ItemsList = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ItemsListRow = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 985px) {
        flex-direction: row;
        flex-wrap: wrap;

        li {

            &:not(:first-child) {

                &::before {
                    content: '| ';
                    color: var(--color-light-text);
                }
            }
        }
    }
`

export const SocialContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .footer-country {
        display: flex;
        align-items: center;
        gap: 8px;
        ${font.titleMedium};
        color: var(--color-bright);
        margin-bottom: 8px;

        &::before {
            content: '';
            display: block;
            background-image: url('/assets/img/icons/location-icon.svg');
            width: 24px;
            height: 24px;
        }
    }

    .footer-copyright {
        ${font.titleMedium};
        color: var(--color-light-text);
    }

    @media (max-width: 985px) {
        align-items: flex-start;
        padding: 24px 16px;
        border-top: 1px solid var(--color-primary-tint);

        .footer-copyright {
            margin-top: 1rem;
        }
    }
`

export const SocialList = styled.ul`

    display: flex;
    gap: 1rem;
    margin-bottom: 26px;
`