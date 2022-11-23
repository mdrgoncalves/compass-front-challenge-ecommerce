import styled from "styled-components";

export const CategoryContainer = styled.main`

    display: grid; 
    grid-template-columns: auto auto; 
    grid-template-rows: auto auto auto; 
    gap: 0px 32px; 
    grid-template-areas: 
        "banner banner"
        "page-params page-params"
        "filter products"; 

    max-width: 1280px;
    margin: 0 auto;
        
    .category__banner {
        grid-area: banner;
        height: max-content;

        @media (max-width: 985px) {
            display: none;
        }
    }

    .category__header {
        grid-area: page-params;
        padding-left: 20px;
        margin-bottom: 42px;

        @media (max-width: 985px) {
            display: none;
        }
    }
    
    .category__filter {
        grid-area: filter;
        padding-left: 20px;

        @media (max-width: 985px) {
            display: none;
        }
    }

    .category__products {
        grid-area: products;
    }

    @media (max-width: 985px) {

        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas:    
            "products";
        padding: 0 22px 0 16px;
        margin-bottom: 60px;
    }
`;