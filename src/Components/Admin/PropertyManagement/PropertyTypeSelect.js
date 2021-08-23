import React,{useState} from 'react';

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
}
from '@material-ui/core';

import {GET_ALL_PROPERTY_TYPES} from '../../../GraphQL/Queries/GetAllPropertyTypes'
import { useQuery } from '@apollo/client';

const PropertyTypeSelect =()=>{

    const [propertyTypeId,setId] =useState(null)
     const handleChange =(event)=>{
         setId(event.target.value)
     }

    const {loading,data,error} =useQuery(GET_ALL_PROPERTY_TYPES)
    if(loading) return <div>loading...</div>
    if(error) return <div>error</div>

    return(
        <FormControl variant="outlined" fullWidth margin='dense'>
                     <InputLabel>Property Type</InputLabel>
                            <Select
                            
                              value={propertyTypeId}
                              onChange={handleChange}
                            label="Services"
                            >
                            {data.allPropertyTypes.map((item)=>(
                                <MenuItem key={item.id} value={item.id}>
                                    {item.type}
                                </MenuItem>
                            ))}
                            </Select>
                </FormControl>
    )
}

export default React.memo(PropertyTypeSelect);