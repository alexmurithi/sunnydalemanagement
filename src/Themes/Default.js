import { colors } from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

// const breakpoints = createBreakpoints({})


const materialUiTheme = createMuiTheme({
   palette:{
       background:{
           default:'#F4F6F8',
           paper:colors.common.white
       },

       primary:{
           main:"#0093dd",
           light:"rgba(0,147,221,0.15)"
       },
       secondary:{
           main:"#85c226",
           light:"rgba(133,194,38,0.15)"
       },

       white:"#ffffff",
       black:"#000000",
       howItWorksBackCl:"ghostwhite",
       text:{
           primary:"#000000",

       }

   },
   typography:{
     fontFamily:"Montserrat",
     h1: {
        fontWeight: 500,
        fontSize: 35,
        letterSpacing: '-0.24px'
      },
      h2: {
        fontWeight: 500,
        fontSize: 29,
        letterSpacing: '-0.24px'
      },
      h3: {
        fontWeight: 500,
        fontSize: 24,
        letterSpacing: '-0.06px'
      },
      h4: {
        fontWeight: 500,
        fontSize: 20,
        letterSpacing: '-0.06px'
      },
      h5: {
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: '-0.05px'
      },
      h6: {
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '-0.05px'
      },
      overline: {
        fontWeight: 500
      }
    //    h5:{
    //      fontFamily:"Montserrat",
    //        fontWeight:600,
    //        fontSize:"1.2rem"
    //    },
    //    subtitle1:{
    //      fontSize:"1rem",
    //        fontFamily:"Montserrat",
    //        fontWeight:400,
    //    },
    //    h4:{
    //        fontFamily:"Montserrat",
    //        fontWeight:800,
    //        [breakpoints.down('md')]:{
    //            fontSize:"1.55rem"
    //        }
    //    },
    //    h2:{
    //        fontFamily:"Montserrat",
    //        fontWeight:800,
    //    },
    //    h3:{
    //        fontFamily:"Montserrat",
    //        fontWeight:800,
    //        [breakpoints.down('md')]:{
    //          fontSize:"1.2rem"
    //        }
    //    },


   },

    overrides:{
       MuiTab:{
           wrapper:{
               flexDirection:"row-reverse"
           },
           textColorInherit:{
               opacity:1
           },
           root:{
               '&$selected': {
                   color: '#0093dd'
               }
           }

       },

        MuiCard:{
           root:{
               margin:"4px"
           }
        }

    },
    desktopTab:{
        textTransform:"none",
        fontSize:"16px",
        color:"#000000",
        minWidth:"120px",
    },

  
})

export default materialUiTheme;