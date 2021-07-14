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

        --text-size-1: clamp(0.5rem, 1vw, 0.75rem);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--bg-color-1);
    }

    body, a, input {
        font-family: 'Roboto', sans-serif;
        font-size: var(--text-size-1);
        color: var(--text-color-2);
        text-decoration: none;
    }

    #root {
        width: 100vw;
        height: 100vh;

        display: flex;
    }

`;