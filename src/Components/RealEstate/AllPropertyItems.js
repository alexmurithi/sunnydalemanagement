import React from 'react';
import {
    Box,
    Card,
    Typography,
    Grid,
    Button
} from "@material-ui/core";

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import KingBedIcon from '@material-ui/icons/KingBed';
import BathtubIcon from '@material-ui/icons/Bathtub';

import { GET_ALL_PROPERTY_ITEMS } from '../../GraphQL/Queries/GetAllPropertyItems';
import { useQuery } from '@apollo/client';

import {makeStyles} from "@material-ui/core";

const useStyles =makeStyles((theme)=>({
card:{
    width:'100%',
    marginBottom:theme.spacing(2),
    borderRadius:0
},
imageTitle:{
    color:theme.palette.white,
    fontWeight:"bold",
    fontSize:'1.2rem',
    paddingBottom:theme.spacing(1)
},
imageSubtitle:{
    color:theme.palette.secondary.main,
    fontWeight:"bold"
},
titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}))


const AllProperties =()=>{
    const classes =useStyles()

    const {loading,data,error} =useQuery(GET_ALL_PROPERTY_ITEMS,{
       
    })
    if (loading) return<div>Loading..</div>
    if (error) return <div>Error</div>
    console.log(data)
   return(
       <>
        <Box>
            {data.allPropertyItems.map((item)=>(
                <Card key={item.id} className={classes.card} elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item lg={4}>
                            <ImageList>
                                <ImageListItem cols={2} rows={1}>
                                    <img 
                                    src={
                                        item.files.length >0 ?item.files[0].path :undefined  
                                    } 
                                    alt={item.title} 
                                    />
                                    <ImageListItemBar 
                                    title={item.property.name} 
                                    subtitle={item.propertyType.type}
                                     classes={{
                                                root: classes.titleBar,
                                                title: classes.imageTitle,
                                                subtitle:classes.imageSubtitle
                                            }}
                                    />
                                </ImageListItem>
                            </ImageList>
                        </Grid>
                        <Grid item lg={8}>
                            <Box py={2}>
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

                            <Box  >
                                <Button
                                    variant="text"
                                    startIcon={<KingBedIcon />}
                                >
                                    {item.no_of_rooms}
                                </Button>
                                <Button
                                    variant="text"
                                    startIcon={<BathtubIcon />}
                                >
                                    {item.no_of_bathrooms}
                                </Button>
                            </Box>

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