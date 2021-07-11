import React from 'react';
import {
    Box,Container,Grid,Typography,List,ListItem,ListItemText,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles =makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.secondary.main,
        width:"100%"
    },
    servicesList:{
        '& .MuiListItemText-root':{
            color:theme.palette.white,
            '& .MuiListItemText-primary':{
                fontSize:'0.85rem'
            }
        }
    }
}))

const AllServices =() =>{
    const classes = useStyles();
    // const theme =useTheme()
    // const isMobileTablet =useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Box py={5} className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">Real Estate Management</Typography>

                        <List className={classes.servicesList}>
                            <ListItem disableGutters>
                                <ListItemText primary="Offices For Rent & Sale"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Lands For Rent and Sale"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Homes For Rent and Sale"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Airbnbs"/>
                            </ListItem>
                        </List>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">
                            Monitoring & Evaluation
                        </Typography>

                        <List className={classes.servicesList}>
                            <ListItem disableGutters>
                                <ListItemText primary="Environmental Audit"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Environmental Monitoring & Evaluation"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Environmental Conservation & Protection"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Waste Disposal & Management"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Environmental Impact Assessment"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Environmental Research"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Water & Forest Resources"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Public Capacity Building"/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">Core Values</Typography>

                        <List className={classes.servicesList}>
                            <ListItem disableGutters>
                                <ListItemText primary="Environmentalism Collaboration"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Honesty & Ethicality"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Trustworthiness"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Creativity & Innovation"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Professionalism"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Transparency"/>
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemText primary="Integrity"/>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AllServices;