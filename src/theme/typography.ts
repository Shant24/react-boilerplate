import { Components, ThemeOptions, Theme } from '@mui/material/styles';

import { FontFamilies } from '@theme/fonts';

export const typography: ThemeOptions['typography'] = (/* theme */) => ({
  fontFamily: FontFamilies.Roboto,
  fontWeightBold: 700,
  fontWeightMedium: 500,
  fontWeightRegular: 400,
  fontWeightLight: 300,
  allVariants: {},
});

export const setTypographyMedias = (theme: Theme) => {
  theme.typography = {
    ...theme.typography,
    h1: {
      [theme.breakpoints.down('md')]: {},
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
  };
};

export const MuiTypography: Components['MuiTypography'] = {};
