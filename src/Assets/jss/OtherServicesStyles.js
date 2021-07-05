import {makeStyles} from "@material-ui/core/styles";

const OtherServicesStyles =makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor:theme.palette.primary.main
    },
    media:{
        height:90,
        objectFit:"cover"
    },
    card:{
        borderRadius:0
    }
}))

export default  OtherServicesStyles;