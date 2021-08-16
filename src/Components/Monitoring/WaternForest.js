import React from 'react';
import {
    Box,
    Container,
    Typography
}
from '@material-ui/core';

import Image from '../Image';
import WaterForestImage from '../../Assets/Images/water-and-forest.jpg';

const WaternForest =()=>{
    return(
        <>
            <Box py={2}>
                <Container>
                    <Typography variant='h4' color='secondary' gutterBottom>
                        Sunnydale's Water and Forest Resources Consultancy
                    </Typography>

                    <Image src={WaterForestImage} height={200} />

                    <Box py={5}>
                        <Typography>
                            
                        </Typography>
                    </Box>
                </Container>
            </Box>  
        </>
    )
}

export default React.memo(WaternForest);