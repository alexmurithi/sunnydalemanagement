import React from 'react';
import {Box,Card,CardContent,Container, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

export const items =[
    {
        href:'/monitoring-and-evaluation/environmental-audit',
        title:"Environmental Audit"
    },
    {
        href:'/monitoring-and-evaluation/environmental-conservation-and-protection',
        title:'Environmental Conservation & protection'
    },
    {
        href:'/monitoring-and-evaluation/waste-disposal-and-management',
        title:'Waste Disposal & Management'
    },
    {
        href:'/monitoring-and-evaluation/environmental-impact-and-assessment',
        title:'Environmental Impact & Assessment'
    },
    {
        href:'/monitoring-and-evaluation/environmental-research',
        title:'Environmental Research'
    },

    // {
    //     href:'/monitoring-and-evaluation/water-and-forest-resources',
    //     title:'Water & Forest Resources'
    // },
    {
        href:'/monitoring-and-evaluation/public-capacity-building',
        title:'Public Capcity Building'
    }
]

const useStyles =makeStyles((theme)=>({
    cardMenu:{
    

    }
}))

const MonitoringMenu =()=>{
    const classes =useStyles();
    return(
        <Box>
            <Container>
            {items.map((item,index)=>(
               <Card key={index} className={classes.cardMenu} elevation={0}>
                   <CardContent >
                       <Typography 
                            component={Link} 
                            to={item.href} 
                            variant='subtitle2' 
                            style={{
                                textDecoration:"none",
                            }}
                            color='primary' 
                       >
                           {item.title}
                       </Typography>
                   </CardContent>
               </Card>
           ))}
           
           </Container>
        </Box>
        
    )
}

export default MonitoringMenu;