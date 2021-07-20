import React from 'react';
import LogoImg from '../Assets/Logo/Logo.png'
import {makeStyles} from "@material-ui/core/styles";
const useStyles =makeStyles((theme)=>({
    logo:{
        [theme.breakpoints.down('md')]:{
            width:"80px",
            objectFit:"cover"
        }
    }
}))
const Logo = ({src,alt="Logo",className, ...rest}) =>{
    const classes =useStyles();
    return(
        <img
            src={LogoImg}
            alt={alt}
            {...rest}
            className={classes.logo}
        />
    )
}

export default Logo;