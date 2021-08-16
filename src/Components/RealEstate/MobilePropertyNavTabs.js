import React,{useState} from 'react';

import {
    Fab,
    Drawer,
    Tabs,
    Tab,
    AppBar,
    TextField,
    Hidden,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    Button,
    Radio,
    RadioGroup,
    AccordionDetails,
    FormControlLabel,
    Typography,
    Accordion,
    AccordionSummary,
    Box,
}
from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

import { GET_ALL_PROPERTIES} from '../../GraphQL/Queries/GetAllProperties';
import { useQuery } from '@apollo/client';


const useStyles =makeStyles((theme)=>({
    fabOpenDrawer:{
      position:'fixed',
      bottom: 12,
      right: '25%',
      left:'25%',
     zIndex:1,
     textTransform:'none',
     
    },

    hideFab:{
        display:'none'
    },
    drawerPaper:{
        borderTopLeftRadius:theme.spacing(3),
         borderTopRightRadius:theme.spacing(3)
    },
    formFilter:{
        padding:theme.spacing(3)
    }
}))

const AccordingSection =()=>{
    const [roomsValue,setRoomsValue] =useState('1')
    const handleRoomsChange =(e)=>{
        setRoomsValue(e.target.value)
    }
     const [bathValue,setBathValue] =useState('1')
    const handleBathChange =(e)=>{
        setBathValue(e.target.value)
    }
    return(
        <Box py={1}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>Rooms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup row value={roomsValue} onChange={handleRoomsChange}>
                        <FormControlLabel 
                        control={<Radio color='primary'/>}
                        label={1}
                        value='1' 
                        />
                        <FormControlLabel 
                        control={<Radio color='primary'/>}
                        label={2}
                        value='2'  
                        />
                        <FormControlLabel 
                        control={<Radio color='primary'/>}
                        label={3}
                        value='3'  
                        />
                        <FormControlLabel 
                        control={<Radio color='primary'/>}
                        label='4+'
                        value='4+'  
                        />
                        
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>Bath Rooms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                     <RadioGroup row value={bathValue} onChange={handleBathChange}>
                        <FormControlLabel 
                        control={<Radio color='primary'/>}
                        label={1}
                        value='1' 
                        />
                        <FormControlLabel 
                        control={<Radio color='primary'/>}
                        label={2}
                        value='2'  
                        />
                        <FormControlLabel 
                        control={<Radio color='primary'/>}
                        label={3}
                        value='3'  
                        />
                        <FormControlLabel 
                        control={<Radio color='primary'/>}
                        label='4+'
                        value='4+'  
                        />
                        
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

const MobilePropertyNavTabs =()=>{
    const classes =useStyles()

    const[open,setOpenBottomDrawer] =useState(false)

    const[value,setValue] =useState(0)

    const handleOnChange=(event,newValue)=>{
        setValue(newValue)
    }

    const handleBottomDrawer =()=>{
        setOpenBottomDrawer(true)
    }
    const handleCloseBottomDrawer=()=>{
        setOpenBottomDrawer(false)
    }

    const [propertyId,setPropertyId] =useState(null)
     const handleProperty =(event)=>{
         setPropertyId(event.target.value)
     }

    const {loading,data,error} =useQuery(GET_ALL_PROPERTIES)
    if (loading) return<div>Loading..</div>
    if (error) return <div>Error</div>
    

    return (
        <>
            <Hidden 
             lgUp 
        >
            <Fab 
                color='primary' 
                variant='extended' 
                align='center' 
                className={clsx(classes.fabOpenDrawer,open && classes.hideFab)} 
                onClick={handleBottomDrawer}
                style={{
                     
                }}
            >
              <SearchIcon/>
              Search Property
          </Fab>
          <Drawer 
            anchor="bottom" 
            open={open}
            onClose={handleCloseBottomDrawer}
            classes={{paper:classes.drawerPaper}}
            
          >
             <AppBar 
             position='static' 
             style={{
                 backgroundColor:'#ffffff'
                 ,color:'#0093dd'
                }}
                elevation={0} 
             >
                 <Tabs 
                    variant="fullWidth" 
                    indicatorColor='primary'
                    value={value}
                    onChange={handleOnChange} 
                 >
                     <Tab label='For Rent'/>
                     <Tab label='On Sale'/>
                 </Tabs>
             </AppBar>

             <form className={classes.formFilter}>
                <FormControl variant="outlined" fullWidth margin='dense'>
                     <InputLabel>Property</InputLabel>
                            <Select
                              value={propertyId}
                              onChange={handleProperty}
                            label="Property"
                            >
                                {data.allProperties.map((item)=>(
                                    <MenuItem key={item.id} value={item.id}>
                                      {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                </FormControl>

                <TextField 
                    label="Town or City" 
                    margin="dense" 
                    variant="outlined" 
                    fullWidth
                    type="text" 
                />
                <div >
                    <TextField 
                    label="Min Price" 
                    margin="dense" 
                    variant="outlined" 
                    type="number"
                    style={{
                        width:"40%"
                    }} 
                />
                <TextField 
                    label="Max Price" 
                    margin="dense" 
                    variant="outlined" 
                    type="number"
                     style={{
                        width:"40%",
                        marginLeft:40
                    }} 
                />
                </div>

                <AccordingSection/>
               <Button color='primary' variant='outlined' size='large'>Search</Button>
             </form>
             
          </Drawer>
        </Hidden> 
        </>
    )
}

export default React.memo(MobilePropertyNavTabs)