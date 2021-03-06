import {makeStyles} from "@material-ui/core/styles";

const WhyChooseUsStyles =makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor:theme.palette.white,
    },
    cardMedia:{
        [theme.breakpoints.down('sm')]:{
           textAlign:"center"
        },
    },
    card:{
        display:"flex",
        [theme.breakpoints.down('sm')]:{
            display: "flex",
            flexDirection: "column"
        },
        backgroundColor:theme.palette.secondary.main,
        "&:nth-child(2)":{
            backgroundColor:theme.palette.white,
        },
        "&:nth-child(3)":{
            backgroundColor:theme.palette.primary.main,
        },
        marginBottom:theme.spacing(5),
        padding:theme.spacing(1),
        borderRadius:0
    },
    cardContent:{
       flexDirection:"column",
        [theme.breakpoints.down('sm')]:{
            display: "flex",
            flexDirection: "column"
        },
    },
    bannerImg:{
        width:"100%",
        height:500,
        objectFit:"contain"
    }

}))

export default WhyChooseUsStyles;