import React from 'react';
import {
    Box,
    Container,
    Typography,
}
from '@material-ui/core';
import Image from '../Image';
import ImpactImage from '../../Assets/Images/impact-assessment.jpg';

const ImpactAssessment =()=>{
    return(
        <>
            <Box py={2}>
                <Container>
                    <Typography 
                        variant='h4' 
                        color='secondary' 
                        gutterBottom 
                    >
                        Sunnydale's Environmental Impact & Assessment
                    </Typography>

                    <Image src={ImpactImage} height={200} />

                    <Box py={2} >
                        <Typography 
                            paragraph 
                        >
                            Environmental Impact Assessment (EIA) is an integral part of 
                            planning and development.  It is a process by which the 
                            anticipated effects on the environment of a proposed 
                            development are measured to inform the decision making 
                            process. The EIA process can often be seen as complex 
                            and confusing, particularly for key stakeholders. 
                            However, if managed well it offers an opportunity 
                            to de-risk development and enhance reputation. 
                        </Typography>

                        <Typography 
                            gutterBottom
                            component='div' 
                        >
                            At <Typography 
                                component='span' 
                                variant='h5'
                                color='secondary'
                            >
                                Sunnydale    
                            </Typography> ,we understand the importance of a 
                            consentable development and our aim is to achieve 
                            a successful consent with the minimum of fuss that
                            maximises commercial viability.
                        </Typography>

                        <Typography variant='h4' color='secondary' gutterBottom>
                        Our Environmental Impact & Assessment (EIA) Expertise
                        </Typography>

                        <Typography paragraph componet='div'>
                           Sunnydale has successfully delivered a considerable number 
                            of Environmental Impact Assessments (EIAs) and produced 
                            many Environmental Statements (ESs) for a diverse range 
                            of development projects.  From supporting successful 
                            consent for large scale wind farms, through to providing 
                            specific environmental appraisals and technical reports 
                            for residential property developments.   With offices 
                            across Kenya we bring an in-depth understanding of the 
                            environmental jurisdiction across many different planning authorities.

                            <br/><br/>

                                Our approach is to focus the EIA process upon the key 
                                issues and take a proportionate approach to the assessment 
                                to minimise project risk and maximise opportunities for success.

                                <br/><br/>
                                Working as an integrated part of your team we:

                                <ul>
                                    <li>
                                        Create a project strategy which identifies the range of issues 
                                        critical to project risk, value and ultimately success.
                                    </li>
                                    <li>
                                        Define a suitable project scope, proportionate to the nature 
                                        and scale of the development, by initiating an early and 
                                        effective consultation process.
                                    </li>
                                    <li>
                                        Design-in solutions, embedding sustainable mitigation measures 
                                        in the design, to add value and reduce the likelihood of issues 
                                        later on, saving you time, money and wasted effort.
                                    </li>
                                    <li>
                                        Prepare a robust Environmental Statement or appraisal 
                                        that addresses regulatory requirements and guidance.
                                    </li>
                                </ul> 
                                <Typography variant='h4' color='secondary' gutterBottom>
                                     Our Environmental Impact & Assessment (EIA) Consultants
                                </Typography>

                                The Sunnydale EIA team brings an enviable skill 
                                set encompassing strategy, planning, technical 
                                and environmental expertise, and is made up of 
                                professional Chartered Environmentalists, 
                                town planners, environmental scientists,  
                                ecologists, ornithologists, acousticians, 
                                hydrologists, CAD technicians,  GIS  and 
                                project managers, making us the natural 
                                choice to meet all of your EIA needs.
                        </Typography>
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default React.memo(ImpactAssessment);