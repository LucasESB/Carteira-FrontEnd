import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color-1: #010409;
        --bg-color-2: #161B22;
        --bg-color-3: #21262D;
        --bg-color-4: #30363D;

        --text-color-1: #F0F6FC;
        --text-color-2: #8B949E;
        --text-color-3: #C9D1D9;
        --text-color-4: #A74646;

        --text-size-1: clamp(0.5rem, 1vw, 0.75rem);       // Menor: 08px Maior: 12px
        --text-size-2: clamp(0.625rem, 1vw, 0.875rem);    // Menor: 10px Maior: 14px
        --text-size-3: clamp(0.75rem, 1vw, 1rem);         // Menor: 12px Maior: 16px
        --text-size-4: clamp(0.875rem, 1.4vw, 1.125rem);  // Menor: 14px Maior: 18px
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--bg-color-1);
    }

    body, input, button, textarea, a {
        font-family: 'Roboto', sans-serif;
        font-size: var(--text-size-2);
        font-weight: 400;
        color: var(--text-color-2);
        text-decoration: none;
    }

    #root {
        width: 100vw;
        height: 100vh;

        display: flex;
    }

`;