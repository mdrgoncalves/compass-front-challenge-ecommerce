import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Inter', sans-serif;

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
`;