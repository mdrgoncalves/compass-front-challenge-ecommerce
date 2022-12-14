import { font } from './../../styles/mixins';
import styled from "styled-components";

export const ConfirmedContainer = styled.main`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem 0;
    height: calc(100vh - 440px);

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.5rem;
        width: 500px;
    }

    .buttons {
        display: flex;
        gap: 1rem;

        button {
            width: fit-content;
            padding: 1rem;
        }
    }

    @media screen and (max-width: 985px) {
        height: 100vh;
        padding: 0 1rem;
        overflow: hidden;

        .text {
            
            h2 {
                font-size: 1.75rem;
            }

            p {
                ${font.titleMedium};
                max-width: 285px;
            }
        }

        .buttons {
            flex-direction: column;
            padding: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 1rem;

            button {
                width: 100%;
                height: 44px;
            }
        }
    }
`;