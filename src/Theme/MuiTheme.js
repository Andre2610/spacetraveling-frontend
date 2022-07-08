import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsDarkModeOn } from 'Store/appState/selector';

import { ThemeProvider, createTheme } from '@material-ui/core';

export default function MUITheme({ children }) {
  const darkMode = useSelector(selectIsDarkModeOn);

  const darkTheme = createTheme({
    breakpoints: {
      values: {
        xxl: '100vw',
      },
    },
    palette: {
      primary: {
        light: '#DB6666',
        main: '#AA0D00',
        dark: '#242424', // button hovering color when in dark
      },
      secondary: {
        light: '#474747',
        main: '#B0B0B0',
        dark: '#CBCACA',
      },
      selectBackground: { light: '#FF6F00', main: '#424242', dark: '#FFD54F' },
      selectMenu: { light: '#FF6F00', main: '#546E7A', dark: '#FFD54F' },
      type: 'dark',
      background: { paper: '#212121' },
    },
    overrides: {
      MuiLink: {
        root: {
          '&:hover': { textDecoration: 'none' },
        },
      },
      MuiButton: {
        root: {
          '&:hover': {
            color: 'white',
            backgroundColor: '#ffa000',
          },
        },
      },
    },
    props: {
      MuiTextField: {
        variant: 'outlined',
        margin: 'normal',
      },
      MuiButton: {
        variant: 'contained',
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        light: '#DB6666',
        main: '#AA0D00',
        dark: '#890000', // button hovering color in light mode
      },
      secondary: {
        light: '#474747',
        main: '#B0B0B0',
        dark: '#CBCACA',
      },
      selectBackground: { light: '#FF6F00', main: '#FFA000', dark: '#FFD54F' },
      selectMenu: { light: '#FF6F00', main: '#EEEEEE', dark: '#FFD54F' },
      type: 'light',
    },
    overrides: {
      MuiLink: {
        root: {
          '&:hover': { textDecoration: 'none' },
        },
      },
      MuiButton: {
        root: {
          '&:hover': {
            color: 'white',
            backgroundColor: '#ffa000',
          },
        },
      },
    },
    props: {
      MuiTextField: {
        variant: 'outlined',
        margin: 'normal',
      },
      MuiButton: {
        variant: 'contained',
      },
    },
  });

  return <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}
