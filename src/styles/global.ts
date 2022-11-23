import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        // Colors
        --color-primary: #1b4b66;
        --color-primary-tint: #639599;
        --color-error: #b00020;
        --color-highlight: #ff8c4b;
        --color-accent: #f4f4f4;
        --color-dark: #13101e;
        --color-bright: #ffffff;
        --color-grey: #f1f1f1;
        --color-light-text: #b6b6b6;
        --color-high-emphasis: #171520;
        --color-low-emphasis: #626262;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    html, button {
        font-family: 'Inter', sans-serif;
        color: var(--color-high-emphasis);
    }

    body {
        position: relative;
    }

    button {
        cursor: pointer;
    }
`;