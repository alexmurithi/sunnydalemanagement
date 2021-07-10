import React from 'react';
import {Box,Container,Grid,Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles =makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.secondary.main,
        width:"100%"
    }
}))

const AllServices =() =>{
    const classes = useStyles();

    return(
        <Box py={4} className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">Real Estate Management</Typography>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">Monitoring & Evaluation</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">Core Values</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AllServices;