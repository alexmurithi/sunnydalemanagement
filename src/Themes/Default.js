import { colors } from '@material-ui/core';
import {createTheme} from '@material-ui/core/styles';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

// const breakpoints = createBreakpoints({})


const materialUiTheme = createTheme({
   palette:{
       background:{
           default:'#F4F6F8',
           paper:colors.common.white
       },

       primary:{
           main:"#0093dd",
           light:"rgba(0,147,221,0.15)",
       },
       secondary:{
           main:"#85c226",
           light:"rgba(133,194,38,0.15)"
       },

       white:"#ffffff",
       black:"#000000",
       howItWorksBackCl:"ghostwhite",
       

   },
   typography:{
     fontFamily:"Montserrat",
     h1: {
        fontWeight: 'bold',
        fontSize: '3.0rem',//55px
        // letterSpacing: '-0.24px'
      },
      h2: {
        fontWeight: 500,
        fontSize: '2.5rem',//42px
        // letterSpacing: '-0.24px'
      },
      h3: {
        fontWeight: 400,
        fontSize: '1.5rem',//30px
        // letterSpacing: '-0.06px'
      },
      h4: {
        fontWeight: 'bold',
        fontSize: '1.2rem',//24px
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.0rem',//18px
        // letterSpacing: '-0.05px'
      },
      h6: {
        fontWeight: 500,
        fontSize: '0.8rem',//14px
        // letterSpacing: '-0.05px'
      },
      // overline: {
      //   fontWeight: 500
      // },
      // body2:{
      //   fontSize:'0.875rem'
      // },
      // body1:{
      //   fontSize:'1rem'
      // },
      // subtitle1:{
      //   fontSize:'1.8rem'
      // },
      // subtitle2:{
      //   fontSize:'1.2rem'
      // }
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
          //  root:{
          //      margin:"4px"
          //  }
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