import styled from 'styled-components';

export const ProductContainer = styled.main`

    display: grid; 
    grid-template-columns: 1fr minmax(300px, 1fr); 
    grid-template-rows: auto auto auto; 
    gap: 1rem 0px; 
    grid-template-areas:
        "page-path page-path" 
        "slider desc"
        "tabs tabs"; 
    padding: 0 20px;

    .page-path {
        grid-area: page-path;
    }

    .slider {
        grid-area: slider;
    }

    .desc {
        grid-area: desc;

        &__buttons {
            display: flex;
            gap: 24px;
        }
    }

    .tabs {
        grid-area: tabs;
        margin-top: 55px;
        margin-bottom: 95px;
    }

    @media (max-width: 985px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        gap: 0.5rem 0px;
        grid-template-areas:
            "page-path"
            "slider"
            "desc";
        padding: 0 1rem;
        margin-bottom: 55px;

        .page-path {
            padding: 1rem 1rem 1rem 0;
        }

        .slider {
            margin-bottom: -19px;
        }

        .desc {
            grid-area: desc;
            width: calc(100vw - 32px);

            &__buttons {
                display: none;
            }
        }

        .tabs {
            display: none;
        }
    }
`;