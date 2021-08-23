import React,{useState} from 'react';

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
}
from '@material-ui/core';

import {GET_ALL_PROPERTIES} from '../../../GraphQL/Queries/GetAllProperties'
import { useQuery } from '@apollo/client';

const PropertySelect =()=>{

    const [propertyId,setId] =useState(null)
     const handleChange =(event)=>{
         setId(event.target.value)
     }

    const {loading,data,error} =useQuery(GET_ALL_PROPERTIES)
    if(loading) return <div>loading...</div>
    if(error) return <div>error</div>

    return(
        <FormControl variant="outlined" fullWidth margin='dense'>
                     <InputLabel>Property</InputLabel>
                            <Select
                            
                              value={propertyId}
                              onChange={handleChange}
                            label="Services"
                            >
                            {data.allProperties.map((item)=>(
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                            </Select>
        </FormControl>
    )
}

export default React.memo(PropertySelect);