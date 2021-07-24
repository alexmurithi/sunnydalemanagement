import React from 'react';
import {makeStyles} from "@material-ui/styles";


const useStyles =makeStyles((theme)=>({
    root:{
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden'
    }
}))

const DashboardLayoutContainer =({children,...rest})=>{
   
    const classes =useStyles()
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}



export default DashboardLayoutContainer;