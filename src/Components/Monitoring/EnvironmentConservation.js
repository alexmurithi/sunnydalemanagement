import React from 'react';
import {Box,Container,Typography} from '@material-ui/core';
import Image from '../Image';
import EnvironmentalConservationImage from '../../Assets/Images/environmental-conservation.jpg';

const EnvironmentalConservation =()=>{
    return(
        <>
          <Box py={2}>
              <Container>
                    <Typography 
                        variant='h4' 
                        color='secondary' 
                        gutterBottom 
                    >
                        Sunnydale Environmental Conservation & Protection
                    </Typography>

                    <Image src={EnvironmentalConservationImage} height={200}/>

                    <Typography 
                        paragraph 
                        gutterBottom
                        color='textPrimary'
                        component='div' 
                    >
                        Our environmental objectives are to
                        <ul>
                            <li>conserve natural resources</li>
                            <li>conserve the existing natural environment</li>
                            <li>repair existing damage.</li>
                        </ul>
                         
                        In order to achieve these objective, 
                        <Typography 
                            color='secondary' 
                            component='span' 
                            variant='subtitle1' 
                        > Sunnydale Management</Typography> aims to reduce emissions, 
                        recycle waste and utilise ecofriendly operations in all of our manufacturing 
                        processes.
                    </Typography>

                    <Typography 
                        variant='h4' 
                        color='secondary' 
                        gutterBottom 
                    >
                        Measures Towards Environmental Conservation:
                    </Typography>

                    <Typography paragraph component='div'>
                        <ul>
                            <li>
                                Recovery of materials: Some of the materials are 
                                recovered from the manufacturing process and reused 
                                instead of disposing off to the environment and, thus 
                                reducing waste and enhancing profits.
                            </li>

                            <li>
                                Organic wastes: Organic Wastes (By-products) 
                                such as Tops & Residues are converted into Valued 
                                Added Products and thus reducing waste generation 
                                and disposal.
                            </li>
                            <li>
                                Solvent recovery: Solvent used for manufacturing is 
                                recovered and reused. Thus recycling the solvent and 
                                reducing the spent solvent disposal and the requirement 
                                of fresh solvent.
                            </li>
                            <li>
                                ETP: High TDS water processed and reused.
                            </li>
                            <li>
                            Emissions & pollutants: Usage of bio fuel (ground nut husk) 
                            for boiler reduces the emissions of green house gases, 
                            pollutants and maintained within the standard environment norms.
                            </li>
                        </ul>
                    </Typography>
              </Container>
              
          </Box>
        </>
    )
}

export default EnvironmentalConservation;