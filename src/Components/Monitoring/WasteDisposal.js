import React from 'react';
import {
    Box,
    Typography,
    Container,
} from '@material-ui/core';
import Image from '../Image';

import WasteImage from '../../Assets/Images/Pune.jpg';

const WasteDisposal =()=>{
    return(
        <>
          <Box py={2}>
              <Container>
                  <Typography 
                        variant='h4' 
                        color='secondary' 
                        gutterBottom 
                  > 
                      Sunnydale Waste Disposal & Management
                  </Typography>

                  <Image src={WasteImage} height={200} />

                  <Box py={2}>
                      <Typography 
                        component='div' 
                        paragraph
                        gutterBottom 
                      >
                          The need to minimise the generation of waste 
                          and harnessing the value in materials previously 
                          thought of as waste, underpins the current global 
                          approach to waste management.

                      </Typography>
                      <Typography 
                            paragraph 
                            gutterBottom 
                      >
                                Sunnydale's comprehensive range of waste management services, 
                                from planning and design to monitoring and project management, 
                                helps our clients deliver and operate essential waste management 
                                facilities, while also returning long-term benefits to communities 
                                and the environment.
                          </Typography>

                          <Typography 
                            paragraph 
                          >
                                Our globally connected team of waste and resource 
                                management professionals delivers robust solutions 
                                to government and private sector clients, to boost 
                                efficiency and drive sustainability. We are committed 
                                to providing our clients with a service that is uniquely 
                                tailored to each situation.
                          </Typography>

                          <Typography component='div'>
                              Our services include:
                              <ul>
                                  <li>
                                        Waste generator services including waste 
                                        characterisation, audits and tracking services
                                  </li>
                                  <li>
                                        Waste management plans for all types of 
                                        developments and industries
                                  </li>
                                  <li>
                                        Development and review of waste policy and regulations
                                  </li>
                                  <li>
                                        Strategic planning for new waste facilities, 
                                        encompassing business case development, options 
                                        assessment and siting studies, legislative approvals 
                                        and impact assessment
                                  </li>
                                  <li>
                                        Design and documentation for recycling and waste disposal facilities, 
                                        such as transfer stations, resource recovery centres, landfills, 
                                        materials recovery facilities
                                  </li>
                                  <li>
                                        Design of waste processing facilities, including organic wastes, 
                                        mixed solid waste and energy from waste facilities and other 
                                        alternative waste technologies (AWT)
                                  </li>
                                  <li>
                                        Specialist engineering advice on issues such as landfill gas, 
                                        leachate, landfill capping systems and liners, stormwater, 
                                        groundwater, geotechnical and environmental issues
                                  </li>
                              </ul>
                          </Typography>
                  </Box>
              </Container>
          </Box>
        </>
    )
}

export default WasteDisposal;