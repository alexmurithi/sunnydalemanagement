import {makeStyles} from "@material-ui/core/styles";

const HowItWorks = makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.howItWorksBackCl
    },
    title:{
        padding:theme.spacing(3)
    }
}))

export default HowItWorks;