import React,{useState,useEffect} from 'react';
import {
    Box,
    Tab,
    Tabs,
    AppBar,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Slider
}
from "@material-ui/core";
import PropTypes from 'prop-types';

import { GET_ALL_PROPERTY_ITEMS } from '../../GraphQL/Queries/GetAllPropertyItems';
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
    const {loading,data,error} =useQuery(GET_ALL_PROPERTY_ITEMS)
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
                     <InputLabel>County</InputLabel>
                     
                            <Select
                            //   value='1'
                              onChange={handleChange}
                            label="Services"
                            >
                                {data.allPropertyItems.map((item)=>(
                                    <MenuItem>
                                      {item.property.name}
                                    </MenuItem>
                                ))}
                                
                                
                                
                            </Select>
                </FormControl>
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
        </>
    )
}

export default PropertyNavTabs;