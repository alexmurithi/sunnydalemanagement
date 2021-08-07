import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Tooltip,
    IconButton
}
from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'100%',
        backgroundColor:theme.palette.white
    },
    valuesBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
}))

const coreValues =[
    {name:"Environmentalism Collaboration"},
    {name:"Honesty & Ethicality"},
    {name:"Trustworthiness"},
    {name:"Integrity"},
    {name:"Creativity & Innovation"},
    {name:"Professionalism"},
    {name:"Transparency"}
]


const OurValues =()=>{
    const classes = useStyles()

  

    return(
        <>
            <Container maxWidth='lg'>
                <Box className={classes.root} py={4}>
                    <Typography variant ='h4' color='secondary' align='center' gutterBottom>
                        Our Values
                    </Typography>

                    <Box>
                        <Container maxWidth='sm'>
                           <Grid container alignItems='center' >
                               <Grid item >
                                       {coreValues.map((item,index)=>(
                                           <Box className={classes.valuesBox} key={index}>
                                            <Typography>{item.name}</Typography>
                                            
                                            <Tooltip title='information' arrow placement='right'>
                                                <IconButton>
                                                    <HelpIcon color='primary'/>
                                                </IconButton>
                                            </Tooltip>
                                           </Box>
                                       ))}
                               </Grid>
                               
                           </Grid>
                        </Container>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default OurValues;