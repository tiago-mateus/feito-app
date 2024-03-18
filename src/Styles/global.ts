import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :focus{
        outline: 0;
    }
    body{
        background: #111111;
        background-image: url("../src/assets/bg2.png");
        background-size:cover;
        background-repeat: no-repeat;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    }
`
