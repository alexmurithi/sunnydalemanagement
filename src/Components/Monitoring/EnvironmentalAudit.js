import React from 'react';
import {Box,Container,Typography} from '@material-ui/core';
import Image from '../Image';
import EnvironmentalAuditImage from '../../Assets/Images/environmentalAudit.jpg';
import { Helmet } from 'react-helmet';

const WhatisEA =()=>(
        <Box>
            <Container>

            <Typography 
                variant='h4' 
                color='secondary' 
                style={{
                    padding:'8px 0'
                }} 
            >
                Sunnydale Environmental Audits (EA)
            </Typography>

            <Image 
                src={EnvironmentalAuditImage} 
                height={200} 
            /> 
            <Typography component='div' 
                style={{
                    padding:'4px 0'
                }} 
            >
                <Typography color='secondary' component='strong'>Sunnydale </Typography> 
                is among the reputed names in the industry for offering 
                environmental audit services in Kenya. The offered 
                services are made available at competitive prices. We are a 
                trusted environmental audit Consultants in Mumbai, engaged 
                in providing services that includes preparation of reports, 
                evaluation of environmental problems, assessment of environmental 
                issues and auditing of reports.
                <br/><br/>
                The audit specification model 
                includes five best practice 
                indicators which are continually 
                assessed throughout the audit process:

                <ul>
                    <li>Leadership</li>
                    <li>Stakeholder engagement</li>
                    <li>Risk management</li>
                    <li>Organisational health and safety culture</li>
                    <li>Continual improvement.</li>
                </ul>
            </Typography>

            </Container>
            
        </Box>
    
)

const WhySunny =()=>(
    <Box>
        <Container>
            <Typography 
                variant='h4' 
                color='secondary' 
            >
                Why choose Sunnydale Management ?
            </Typography>

            <Typography component='div'>
            <ul>
                <li>
                    Get verification and independent recognition 
                    of your health and safety management system(s)
                </li>
                <li>
                    Obtain a comprehensive report outlining the findings 
                    of the audit, quantified outcomes and associated areas 
                    of improvement with detailed recommendations
                </li>
                <li>
                    Improve health and safety performance, workforce 
                    morale and wellbeing
                </li>
                <li>
                    Help towards reduced rates of accidents, 
                    injuries, ill health and litigation costs
                </li>
                <li>
                    Demonstrate your success with an exclusive certificate and logo
                </li>
                <li>
                    Enhance your reputation.
                </li>
            </ul>
            </Typography>
            
        </Container>
    </Box>
)

const WhoFor =()=>(
    <Box>
        <Container>
            <Typography 
                variant='h4' 
                color='secondary' 
                gutterBottom
            >
                Who is it for ?
            </Typography>
            <Typography paragraph gutterBottom>
                It is best suited to organisations that require 
                a detailed and objective evaluation of their 
                occupational health and safety management system(s) 
                and associated arrangements.
            </Typography>
        </Container>
    </Box>
)

const HowItWorks=()=>(
    <Box>
        <Container>
            <Typography 
                variant='h4' 
                color='secondary'
                gutterBottom
            >
                How does it work ?
            </Typography>
            <Typography paragraph gutterBottom component='div'>
                The audit process assesses performance against 
                best practice health and safety management indicators 
                (including top management leadership and continual improvement), 
                identifies areas of positive / negative practice and provides a 
                structured route for continual improvement. Our experienced and 
                trained auditors will assess and verify your health and safety 
                performance against the requirements of the audit specification 
                through a process of:

                <ul>
                        <li>On-site review of relevant documentation</li>
                        <li> Interviews/discussions with relevant stakeholders</li>
                        <li> Operational sampling.</li>
                    </ul>   
            </Typography>
            
        </Container>
    </Box>
)

const EnvironmentalAudit=()=>{
    return(
        <>
            <Helmet>
                <title>Environmental Audit</title>
            </Helmet>
            <WhatisEA/>
            <WhySunny/>
            <WhoFor/>
            <HowItWorks/>
        </>
    )
}

export default EnvironmentalAudit;