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
       black:"#000000",
       text:{
           primary:"#000000"
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
           textColorInherit:{
               opacity:1
           },
           root:{
               '&$selected': {
                   color: '#0093dd'
               }
           }

       },

    },
    desktopTab:{
        textTransform:"none",
        fontSize:"16px",
        color:"#000000",
        minWidth:"120px",
    },

  
})

export default materialUiTheme;