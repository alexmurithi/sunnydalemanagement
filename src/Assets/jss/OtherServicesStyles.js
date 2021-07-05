import {makeStyles} from "@material-ui/core/styles";

const OtherServicesStyles =makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor:theme.palette.primary.main
    },
    media:{
        height:90,
        objectFit:"contain",
        [theme.breakpoints.down('md')]:{
            height: 200
        }
    },
    card:{
        borderRadius:0
    },
    moreBtn:{
        backgroundColor:theme.palette.white,
        borderRadius:0,
        color:theme.palette.primary.main,

        textTransform:"none"
    }
}))

export default  OtherServicesStyles;