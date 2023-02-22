import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  padding: 30px 10px;
  min-height:100vh;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

button {
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none
}


h1,
h2 {
  font-size: 30px;
  margin: 0;
  padding: 50px;
  text-align: center;
}

`;

export default GlobalStyles;
