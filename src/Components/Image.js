import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
const useStyles = makeStyles(() => ({
    image: {
        objectFit: "cover",
        width:"100%",
        maxWidth:'100%'
        // maxWidth: "100%",
    },
}));
const Image =({src,alt="Sunnydale Image", className,...rest})=>{
    const classes =useStyles();
    return(
        <img
            src={src}
            alt={alt}
            className={clsx(classes.image,className || "")}
            {...rest}
        />
    )
}

Image.prototype ={
    src:PropTypes.string.isRequired,
}

export default Image;