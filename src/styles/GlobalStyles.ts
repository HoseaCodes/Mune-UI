import { createGlobalStyle } from 'styled-components';
import { colors, typography } from '../styles';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${typography.fontFamily};
    font-size: ${typography.fontSize};
    background-color: ${colors.background};
    color: ${colors.text};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
