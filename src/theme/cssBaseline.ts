import { css, Components } from '@mui/material/styles';

import { FontFamilies } from '@theme/fonts';

export const MuiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: ${FontFamilies.Roboto};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      display: inline-block;
      color: inherit;
      text-decoration: none;
    }
  `,
};
