import React from 'react';
import {
    Box,
    Container,
    Typography
}
from '@material-ui/core';
import Image from '../Image';
import EnvironmentalImage from '../../Assets/Images/environmental-3.jpg';

const EnvironmentalResearch =()=>{
    return(
        <>
            <Box py={2}>
                <Container>
                    <Typography 
                        variant='h4' 
                        color='secondary' 
                        gutterBottom 
                    >
                        Sunnydale Environmental Research (ER)
                    </Typography>

                    <Image 
                        src={EnvironmentalImage} 
                        height={200} 
                    />

                    <Box py={2}>
                        <Typography 
                            variant='h4' 
                            color='secondary'
                            gutterBottom 
                        >
                            Research & Development
                        </Typography>

                        <Typography 
                            paragraph 
                            component='div'
                            gutterBottom 
                        >
                                There is no doubt about this; Top performing
                                organizations invest in research and
                                development to evaluate market performance
                                and business opportunities. R&D is the key
                                to continuous market expansion.
  
                        </Typography>

                        <Typography variant='h4' color='secondary' gutterBottom>
                                    Is there a business area you would want to
                                    explore comprehensively?
                        </Typography>

                        <Typography paragraph gutterBottom>
                                 We provide professional support in
                                environmental and business research to help
                                you know what you do not know. Our aim is to
                                help you make evidence-based decision
                                by providing realistic and timely data. Our
                                research team is ready to serve your research
                                needs any day, any time. 
                        </Typography>
                        <Typography variant='h4' color='secondary'>
                            Why Sunnydale ?
                        </Typography>

                        <Typography component='div'>
                            <ul>
                                <li>
                                We are experienced in research
                                </li>
                                <li>
                                    Our organization itself is built on constant
                                    research
                                </li>
                                <li>
                                We provide well-analyzed and
                                visualized results
                                </li>
                                <li>
                                Our partner laboratories make sure your
                                scientific data is thoroughly analyzed.
                                </li>
                                <li>
                                We provide deductive analysis of the
                                implications of the research data.
                                </li>
                            </ul>
                        </Typography>

                        <Typography>
                        All our services are time-bound. Give
                        us your time frame and we’ll make it
                        happen as needed
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default EnvironmentalResearch;