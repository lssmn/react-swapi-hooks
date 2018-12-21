// @flow

import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.color.text};
    background-color: ${p => p.theme.color.background};
  }

  input, select {
    outline: 0;
    box-sizing: border-box;
  }

  select {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${p => p.theme.color.background};
    color: ${props => props.theme.color.text};
    border: 1px solid ${p => p.theme.color.border};
  }
`;

export default GlobalStyle;
