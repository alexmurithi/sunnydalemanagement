import {createMuiTheme} from '@material-ui/core/styles';

const materialUiTheme = createMuiTheme({
   palette:{
       primary:{
           main:"#0093dd",
       },
       secondary:{
           main:"#85c226"
       },

       white:"#ffffff",
       black:{
           main:"#000000"
       }

   },
   typography:{
     fontFamily:"Montserrat"
   },

    overrides:{
       MuiTab:{
           wrapper:{
               flexDirection:"row-reverse"
           },

       }
    },
    desktopTab:{
        textTransform:"none",
        fontSize:"16px",
        color:"#000000",
        minWidth:"120px",
    }
  
})

export default materialUiTheme;