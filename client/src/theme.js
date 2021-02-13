import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002333',
    },
    secondary: {
      main: '#00cc66',
    },
    secondaryText: {
      main: '#008c46',
    },
    background: {
      default: '#162b36',
    },
    error: {
      main: red.A400,
    }
  },
});

export default theme;