import React from 'react';
import {Helmet} from 'react-helmet';
import {Box,Container,Typography} from '@material-ui/core';
import Image from '../Components/Image';
import NotFoundSvg from '../Assets/svg/404.svg';

const NotFound =()=>{
    return(
        <>
          <Helmet>
              <title>404 | Sunny Dale</title>
          </Helmet>

          <Box 
          style={{
              backgroundColor:'background.default',
              display:'flex',
              flexDirection:'column',
              height:"100%",
              justifyContent:'center'
          }} 
          py={4}
          >
              <Container maxWidth='md'>
              <Typography
                    align="center"
                    color="textPrimary"
                    variant="h1"
              >
                    404: The page you are looking for cannot be traced!
                </Typography>

                <Typography
                    align="center"
                    color="textPrimary"
                    variant="subtitle2"
                    style={{
                        paddingTop:8
                    }}
                >
                    You either typed your destination incorrectly or landed here by mistake.
                    If you do not know where to go select below options
                </Typography>
                
                <Box align="center">
                    <Image 
                    src={NotFoundSvg} 
                    style={{
                        width:560,
                        maxWidth:"100%",
                        marginTop:50
                    }} 
                    />
                </Box>
              </Container>
          </Box>
        </>
    )
}

export default NotFound;
