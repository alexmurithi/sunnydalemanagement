import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid
}
from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles =makeStyles((theme)=>({
root:{
    width:'100%',
    backgroundColor:theme.palette.black,
    color:theme.palette.white
}
}))

const GetYear=()=>new Date().getUTCFullYear()

const Footer =()=>{
    const classes =useStyles()
    
    return(
        <>
        <Box className={classes.root} py={2}>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Typography variant='h6'>
                            Sunnydalemanagement
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Typography variant='h6'>
                        Copyright © <GetYear/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Typography variant='h6'>
                        Designed & Developed by Alex Gitari
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </>
    )
}

export default Footer;