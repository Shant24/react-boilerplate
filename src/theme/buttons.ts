import { Components } from '@mui/material/styles';

export const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    // disableRipple: true,
  },
  styleOverrides: {
    root: {},
  },
};

export const MuiButtonBase: Components['MuiButtonBase'] = {
  // variants: [
  //   {
  //     props: { disabled: true },
  //     style: { opacity: 0.32 },
  //   },
  //   {
  //     props: { disabled: false },
  //     style: {},
  //   },
  // ],
  defaultProps: {},
  styleOverrides: {
    root: {},
    disabled: {},
    focusVisible: {},
  },
};
