import createTheme from '@mui/material/styles/createTheme';
import { css } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiCssBaseline: css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
          'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `,
  },
});
