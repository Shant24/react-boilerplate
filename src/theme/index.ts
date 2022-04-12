import createTheme from '@mui/material/styles/createTheme';

import { MuiCssBaseline } from '@theme/cssBaseline';
import { palette } from '@theme/palette';
import { typography, MuiTypography, setTypographyMedias } from '@theme/typography';
import { MuiButton, MuiButtonBase } from '@theme/buttons';
import { MuiInput, MuiInputLabel, MuiOutlinedInput } from '@theme/inputs';

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiCssBaseline,
    MuiTypography,
    MuiButton,
    MuiButtonBase,
    MuiInput,
    MuiInputLabel,
    MuiOutlinedInput,
  },
});

setTypographyMedias(theme);

export default theme;
