import React from 'react';
import {makeStyles} from "@material-ui/styles";


const useStyles =makeStyles((theme)=>({
    root:{
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto'
    }
}))

const DashboardLayoutContent =({children,...rest})=>{
   
    const classes =useStyles()
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}



export default DashboardLayoutContent;