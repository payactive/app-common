import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#086992',
    },
    secondary: {
      main: '#0198B5',
    },
    background: {
      default: '#ECF2F6',
    },
    error: {
      main: '#B83B86',
    },
    warning: {
      main: '#DDAF3B',
    },
    success: {
      main: '#1BA39D',
    },
  },
  typography: {
    fontFamily: 'Noto Sans KR, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 'lighter'
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
