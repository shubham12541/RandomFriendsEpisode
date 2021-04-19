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
      });
}

export default {DefaultTheme, DarkTheme}

// export default DefaultTheme;