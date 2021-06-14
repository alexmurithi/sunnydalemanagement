import {createMuiTheme} from '@material-ui/core/styles';

const materialUiTheme = createMuiTheme({
   palette:{
       primary:{
           main:"#0093dd",

       },
       navbar:{
          main:"#ffffff",
                  },

       secondary:{
           main:"#85c226"
       },
       text:{
           primary:"#000000"
       }
   },
   typography:{
     fontFamily:"Montserrat"
   },
  
})

export default materialUiTheme;