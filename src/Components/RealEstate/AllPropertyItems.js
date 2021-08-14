import React from 'react';
import {
    Box,
    Card,
    Typography,
    Grid,
   
} from "@material-ui/core";

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

import { GET_ALL_PROPERTY_ITEMS } from '../../GraphQL/Queries/GetAllPropertyItems';
import { useQuery } from '@apollo/client';

import {makeStyles} from "@material-ui/core";

const useStyles =makeStyles((theme)=>({
card:{
    width:'100%',
    marginBottom:theme.spacing(2),
    borderRadius:0
}
}))


const AllProperties =()=>{
    const classes =useStyles()

    const {loading,data,error} =useQuery(GET_ALL_PROPERTY_ITEMS)
    if (loading) return<div>Loading..</div>
    if (error) return <div>Error</div>
    console.log(data)
   return(
       <>
        <Box>
            {data.allPropertyItems.map((item)=>(
                <Card key={item.id} className={classes.card} elevation={1}>
                    <Grid container spacing={1}>
                        <Grid item lg={4}>
                            <ImageList>
                                <ImageListItem>

                                </ImageListItem>
                            </ImageList>
                        </Grid>
                        <Grid item lg={8}>
                            <Typography variant='h4' color='primary' gutterBottom>
                                KSH {item.price}
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant='h5' gutterBottom>
                                {item.county} County
                            </Typography>
                            <Typography variant='h5' gutterBottom color='textSecondary'>
                                {item.town}, {item.city} 
                            </Typography>
                            <Box>
                                {item.no_of_rooms} rooms
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </Box>
       </>
   )
}

export default React.memo(AllProperties);