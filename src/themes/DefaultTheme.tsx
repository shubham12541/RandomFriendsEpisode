import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';



const DefaultTheme = () => {
    return createMuiTheme({
        palette: {
          primary: {
            main: orange[500],
          },
          secondary: {
            main: purple[500],
          },
          text: {
              primary: "rgba(0, 0, 0, 0.87)"
          },
          background: {
            default: "#ffffff"
          },
        },
        typography: {
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
      });   
}


const DarkTheme = () => {
    return createMuiTheme({
        palette: {
          primary: {
            main: orange[500],
          },
          secondary: {
            main: purple[500],
          },
          text: {
              primary: "rgba(255, 255, 255, 0.87)"
          },
          background: {
            default: "#000000"
          },
        },
        typography: {
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
      });
}

export default {DefaultTheme, DarkTheme}

// export default DefaultTheme;