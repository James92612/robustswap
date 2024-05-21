import { createTheme } from '@mui/material/styles'

let theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: '96px',
      fontWeight: 700,
      lineHeight: '104px',
      textTransform: 'uppercase'
    },
    h2: {
      fontSize: '72px',
      fontWeight: 800,
      lineHeight: '80px',
      textTransform: 'uppercase'
    },
    h3: {
      fontSize: '64px',
      fontWeight: 700,
      lineHeight: '64px',
      textTransform: 'uppercase'
    },
    h4: {
      fontSize: '34px',
      fontWeight: 600,
      lineHeight: '40px'
    },
    h5: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '28px'
    },
    h6: {
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '24px'
    },
    button: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px'
    },
    subtitle1: {
      fontSize: '50px',
      fontWeight: 700,
      lineHeight: '64px'
    },
    subtitle2: {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '64px'
    }
  }
});

export default theme