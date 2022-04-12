import { css } from '@mui/material/styles';

import { FontFamilies } from '@theme/fonts';

export const MuiCssBaseline = css`
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
`;
