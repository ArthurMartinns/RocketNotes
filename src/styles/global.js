import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.COLORS.WHITE};
}

body, input, button, textarea {
    font-family: 'Roboto', serif;
    outline: none;
}

a {
    text-decoration: none;
}

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}

html{
    font-size: 62.5%;
}
`