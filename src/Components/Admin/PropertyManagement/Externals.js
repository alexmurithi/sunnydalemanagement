import React, { useState } from 'react';

import {
    Box,
    FormGroup,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormHelperText,
} from '@material-ui/core';

import {GET_ALL_EXTERNALS} from '../../../GraphQL/Queries/GetAllExternals';
import {useQuery} from '@apollo/client';

const Externals =({externalCallBack})=>{
    // const[checked,setChecked] =useState({
        
    // })

    // const handleChange =(event)=>{
    //     setChecked({...checked,[event.target.value]:event.target.checked})
    // }

    const {loading,data,error}=useQuery(GET_ALL_EXTERNALS)

    if(loading) return <div>Loading..</div>

    if(error) return <div>Error</div>

    return (
      <>
        {/* {console.log(checked)} */}
        <Box py={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              External Facilities in the building
            </FormLabel>
            <FormGroup>
              {data.allExternals.map((item) => (
                <FormControlLabel
                  control={
                    <Checkbox
                    //   checked={checked.value}
                      onChange={externalCallBack}
                      name={item.name}
                      color="primary"
                      value={item.id}
                    />
                  }
                  label={item.name}
                  key={item.id}
                />
              ))}
            </FormGroup>
            <FormHelperText>Select Accordingly!</FormHelperText>
          </FormControl>
        </Box>
      </>
    );
}

export default React.memo(Externals);