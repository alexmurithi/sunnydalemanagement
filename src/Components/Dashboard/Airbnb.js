import React from 'react';
import {Avatar, Card,CardContent, Grid, Typography,Box} from '@material-ui/core';
import KingBedIcon from '@material-ui/icons/KingBed';
import {green,purple} from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Airbnb =()=>{
    return(
        <Card >
            <CardContent>
                <Grid 
                    container 
                    spacing={3} 
                    style={{
                        justifyContent:"space-between"
                    }} 
                >
                    <Grid item >
                        <Typography 
                            color="textSecondary" 
                            gutterBottom 
                            variant="h6" 
                        >
                            Airbnbs
                        </Typography>

                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                           1,800
                        </Typography>
                    </Grid>

                    <Grid item >
                        <Avatar 
                        style={{
                            height:64,
                            width:64,
                            backgroundColor:purple[600]
                        }} 
                        >
                            <KingBedIcon/>
                            
                        </Avatar>
                    </Grid>
                </Grid>

                <Box 
                    style={{
                        display:'flex',
                        alignItems:'center',
                        pt:2
                    }} 
                >
                    <ArrowUpwardIcon 
                        style={{
                            color:green[900]
                        }} 
                    />
                    <Typography 
                        variant="body2" 
                        style={{
                            color:green[900],
                            marginRight:10
                        }} 
                    >
                        67%
                    </Typography>

                    <Typography variant="caption" color="textSecondary">
                        Since last month
                    </Typography>

                </Box>

            </CardContent>
        </Card>
    )
}

export default Airbnb;