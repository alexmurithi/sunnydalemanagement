import React from 'react';
import { GET_All_PROPERTY_ITEMS } from '../../GraphQL/Queries/TestQuery';
import { useQuery } from '@apollo/client';
import {
    Box,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles =makeStyles((theme)=>({
    root:{
      width:'100%'
    },
    
}))

const RE_Items =[
    {name:"Apartments"},
    {name:"Offices"},
    {name:"Shops"},
    {name:"Homes"},
    {name:"Airbnbs"},
    {name:"Rentals"}
]

const ME_Items =[
    {name:"Environmental Audit"},
    {name:"Environmental Conservation & Protection"},
    {name:"Waste Disposal & Management"},
    {name:"Environmental Impact & Assessment"},
    {name:"Environmental Research"},
    {name:"Public Capacity Building"}
]

const AllServices =() =>{
    const classes = useStyles();
    const {loading,data,error} =useQuery(GET_All_PROPERTY_ITEMS)

    if (loading) return <div>Loading...</div>
    if(error) return <div>Error</div>

    console.log(data)
    
    return(
       <>
        <Box py={4} className={classes.root}>
            <Container maxWidth='md'>

                <Box py={3}>
                <Typography variant='h4' align='center' gutterBottom>
                    All Services
                </Typography>
                </Box>
               

                <Box>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={12} lg={6} xl={6}>
                            <Typography variant='h4' color='textSecondary'>
                                Real Estate Management
                            </Typography>

                            <List>
                                {RE_Items.map((item,index)=>(
                                    <ListItem key={index}>
                                        <ListItemText secondary={item.name} />      
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item sm={12} md={12} lg={6} xl={6}>
                        <Typography variant='h4' color='textSecondary'>
                                Monitoring & Evaluation Management
                            </Typography>

                            <List>
                                {ME_Items.map((item,index)=>(
                                    <ListItem key={index}>
                                        <ListItemText secondary={item.name} />      
                                    </ListItem>
                                ))}
                            </List>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
       </>
    )
}

export default AllServices;