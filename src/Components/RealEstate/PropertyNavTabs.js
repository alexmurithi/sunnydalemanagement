import React,{useState} from 'react';
import {
    Box,
    Tab,
    Tabs,
    AppBar,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
  
}
from "@material-ui/core";
import PropTypes from 'prop-types';

import { GET_ALL_PROPERTIES} from '../../GraphQL/Queries/GetAllProperties';
import { useQuery } from '@apollo/client';


const TabPanel =(props)=>{
   
    const {children,value,index,...others}=props
   
    return(
        <Box 
        {...others}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`} 
        >
            {value === index && (
               <Box py={2}>{children}</Box>
            )}
        </Box>
    )
}

TabPanel.propTypes ={
    children:PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
   
}



const PropertyNavTabs =()=>{
     const [value,setTabsValue] =useState(0)
     const handleChange =(event,newValue)=>{
         setTabsValue(newValue)
     }

     const [propertyId,setPropertyId] =useState(null)
     const handleProperty =(event)=>{
         setPropertyId(event.target.value)
     }

    const {loading,data,error} =useQuery(GET_ALL_PROPERTIES)
    if (loading) return<div>Loading..</div>
    if (error) return <div>Error</div>
    console.log(data)
    
   
    return(
        <>
            <Box>
            <AppBar position='static' elevation={0} color='primary'>
                <Tabs 
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    textColor='inherit'
                >
                    <Tab label="For Rent" />
                    <Tab label="On Sale" />

                </Tabs>
            </AppBar>
            
            <TabPanel value={value} index={0}  >
              
                <form>
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
                        width:"45%"
                    }} 
                />
                <TextField 
                    label="Max Price" 
                    margin="dense" 
                    variant="outlined" 
                    type="number"
                     style={{
                        width:"45%",
                        marginLeft:40
                    }} 
                />
                </div>
                
               
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
        </>
    )
}

export default React.memo(PropertyNavTabs);