import { colors } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const materialUiTheme = createTheme({
  palette: {
    background: {
      default: "#F4F6F8",
      paper: colors.common.white,
    },

    primary: {
      main: "#0093dd",
      light: "rgba(0,147,221,0.15)",
    },
    secondary: {
      main: "#85c226",
      light: "rgba(133,194,38,0.15)",
    },

    white: "#ffffff",
    black: "#000000",
    howItWorksBackCl: "ghostwhite",
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontWeight: "bold",
      fontSize: "3.0rem", //55px
      // letterSpacing: '-0.24px'
    },
    h2: {
      fontWeight: "bold",
      fontSize: "2.5rem", //42px
      // letterSpacing: '-0.24px'
    },
    h3: {
      fontWeight: "bold",
      fontSize: "1.5rem", //30px
    },
    h4: {
      fontWeight: "bold",
      fontSize: "1.2rem", //24px
    },
    h5: {
      fontWeight: "bold",
      fontSize: "1.0rem", //18px
    },
    h6: {
      fontWeight: "bold",
      fontSize: "0.8rem", //14px
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "p",
        body2: "p",
      },
    },
  },

  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: "row-reverse",
      },
      textColorInherit: {
        opacity: 1,
      },
      root: {
        "&$selected": {
          color: "#0093dd",
        },
      },
    },

    MuiCard: {
      //  root:{
      //      margin:"4px"
      //  }
    },
  },
  desktopTab: {
    textTransform: "none",
    fontSize: "16px",
    color: "#000000",
    minWidth: "120px",
  },
});

export default materialUiTheme;
