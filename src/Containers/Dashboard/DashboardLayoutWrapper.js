import React from 'react';
import {makeStyles} from "@material-ui/styles";


const useStyles =makeStyles((theme)=>({
    root:{
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('lg')]: {
          paddingLeft: 256
        }
    }
}))

const DashboardLayoutWrapper =({children,...rest})=>{
   
    const classes =useStyles()
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}



export default DashboardLayoutWrapper;