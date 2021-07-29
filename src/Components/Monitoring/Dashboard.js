import React from 'react';
import {Box,Container,Typography} from '@material-ui/core'
import MonitoringImage from '../../Assets/Images/environmental-1.jpg';
import Image from '../Image';
import {makeStyles} from '@material-ui/core/styles';

const useStyles =makeStyles((theme)=>({
  root:{
      width:'100%',
  },
  list:{
      '& .MuiListItem-root':{
          margin:0
      }
  }

}))



const MonitoringDashboard =()=>{
    const classes =useStyles()
    return(
        <Box className={classes.rooot} py={2}>
            
            <Container>

            <Typography 
                variant='h4' 
                color='secondary' 
                style={{
                    paddingBottom:'16px'
                }} 
            >
                Monitoring and Evaluation (M&E)
            </Typography>

            <Box className={classes.MonitoringRootImage}>
                <Image src={MonitoringImage} height={200}/>
            </Box>
            
            <Typography 
               paragraph
                style={{
                    padding:'8px'
                }} 
            >
                M&E is at the core of sustainable development and is key for
                every organization looking to making and maintaining
                continuous quality improvements.
                It ensures that you build on your current strengths to
                propel yourself to the next level while working on your
                weaknesses.
            </Typography>

            <Typography paragraph>
            Our M&E department provides you with professional
            monitoring and evaluation services to support strategic
            decision-making. We help you track your progress across
            the continuum of your project. This helps you fast-track
            your goals while minimizing resources utilization and
            optimizing outputs per resource input.
            </Typography>

            {/* <Steps/> */}

            <Box py={4} >
                <Typography variant='h4' color='secondary'>
                    What’s best with hiring Sunnydale for M&E services?
                </Typography>

                <ul>
                    <li>We provide professionally designed and customized M&E</li>
                    <li>
                        We help you build organizational
                        capacity for independent monitoring 
                        and evaluation
                    </li>
                    <li>We are experienced in research</li>
                    <li>
                        We provide evaluation reports monthly,
                         quarterly, and
                        semi-annually. 
                    </li>
                    <li>
                        We provide well-analyzed and
                        visualized results
                    </li>
                    <li>
                            We engage competent professionals in 
                            determining courses
                            of action to address business needs
                    </li>
                    <li>
                        We provide evaluation reports monthly, 
                        quarterly, and
                        semi-annually.
                    </li>
                    <li>
                    our data security is top-notch. We are very
                     professional and confidential.
                    </li>
                </ul>
            </Box>

          </Container>
           
        </Box>
    )
}

export default MonitoringDashboard