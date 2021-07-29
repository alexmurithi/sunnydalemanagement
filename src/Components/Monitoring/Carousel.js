import React from 'react';
import {Box,Container} from '@material-ui/core';
import Carousel from '../../Assets/Images/environmental-1.jpg';
import {styled} from '@material-ui/core/styles';

const BackgrndImage =styled(Box)({
    position:"relative",
    height:300,
    backgroundImage:`url(${Carousel})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',

})

const ColorOverlay =styled(Box)({
    position:"absolute",
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    backgroundColor:`rgba(0,0,0,0.65)`,
    color:"white"
})

const MonitoringCarousel =()=>{
    return(
        <Container style={{marginTop:18}}>
            <BackgrndImage>
                <ColorOverlay>
                  <Box 
                  style={{
                      display:'flex',
                      justifyContent:'center'
                  }} 
                  >
                      123ccb vvds
                  </Box>
                </ColorOverlay>
            </BackgrndImage>
        </Container>
        
    )
}

export default MonitoringCarousel;