import React from 'react';
import {
    Box,
    Container,
    Typography
}
from '@material-ui/core';
import Image from '../Image';
import BuildImage from '../../Assets/Images/building-capacity.jpg';

const CapacityBuilding =()=>{
    return(
        <>
            <Box py={2}>
                <Container>
                    <Typography variant='h4' color='secondary' gutterBottom>
                       Sunnydale's Public Capacity Building
                    </Typography>
                    <Image  src={BuildImage} height={200} />

                    <Box py={2}>
                        <Typography paragraph component='div' gutterBottom>
                            Sunnydale has the ability to tailor specific training 
                            programs and educational tools to meet private 
                            and public client goals; social needs and 
                            preferred learning styles. We offer a forum 
                            for organizations and companies with leading 
                            positions in corporate sustainability to work 
                            together to move environmental management and 
                            broader sustainability efforts to a higher plane. 
                            In our training sessions, clients leverage their 
                            collective wisdom and experience to expand a 
                            database of sustainability management knowledge 
                            in an executable format.
                        </Typography>
                        <Typography>
                        At the end of the training programs, our 
                        clients are offered assistance to implement 
                        best-practices sustainability management models; 
                        increase their skills to unlock additional 
                        sustainability value, enhance measurement 
                        approaches to better manage and report to 
                        the enterprise. Performance-driven learning 
                        approaches and resources include access to 
                        capacity building for government and companies, 
                        using international consultants and state-of-the-art 
                        information technology to reach target audiences, 
                        and using evaluation methods to ensure the effectiveness 
                        of our services and programs.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default React.memo(CapacityBuilding);