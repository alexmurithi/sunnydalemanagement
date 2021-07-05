import {createMuiTheme} from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})


const materialUiTheme = createMuiTheme({
   palette:{
       primary:{
           main:"#0093dd",
       },
       secondary:{
           main:"#85c226"
       },

       white:"#ffffff",
       black:"#000000",
       howItWorksBackCl:"ghostwhite",
       text:{
           primary:"#000000"
       }

   },
   typography:{
     fontFamily:"Montserrat",
       h5:{
         fontFamily:"Montserrat",
           fontWeight:600,
           fontSize:"1.2rem"
       },
       subtitle1:{
         fontSize:"0.8rem",
           fontFamily:"Montserrat",
       },
       h4:{
           fontFamily:"Montserrat",
           fontWeight:800,
           [breakpoints.down('md')]:{
               fontSize:"1.5rem"
           }
       },
       h2:{
           fontFamily:"Montserrat",
           fontWeight:800,
       },
       h3:{
           fontFamily:"Montserrat",
           fontWeight:800,
           [breakpoints.down('md')]:{
             fontSize:"1.2rem"
           }
       }
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