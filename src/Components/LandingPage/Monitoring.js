import React from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    Button
}
from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import E_AuditImg from '../../Assets/Images/environmentalAudit.jpg';
import E_ImpactImg from '../../Assets/Images/impact-assessment.jpg';
import WasteImg from '../../Assets/Images/Pune.jpg';
import Image from '../Image';
import {Link} from 'react-router-dom';

const useStyles =makeStyles((theme)=>({
    root:{
        width:'100%',
        backgroundColor:theme.palette.white,
        padding:theme.spacing(3)
    },
    card:{
        borderRadius:0,
        boxShadow:theme.shadows[2]
    },
    cardItems:{
        padding:theme.spacing(2)
    }
}))

const CardDetails =[
    {
        title:'Environmental Audit',
        description: `We are a trusted environmental 
        audit Consultants in Kenya, engaged in providing 
        services that includes preparation of reports, 
        evaluation of environmental problems, assessment 
        of environmental issues and auditing of reports.`,
        image:E_AuditImg
    },
    {
        title:'Environmental Impact Assessment (EIA)',
        description:`Our approach is to focus the EIA process 
        upon the key issues and take a proportionate approach 
        to the assessment to minimise project risk and maximise 
        opportunities for success.`,
        image:E_ImpactImg
    },
    {
        title:'Waste Disposal & Management',
        description:`Sunnydale's comprehensive range of waste 
        management services, from planning and design to monitoring 
        and project management, helps our clients deliver and operate 
        essential waste management facilities, while also returning 
        long-term benefits to communities and the environment.`,
        image:WasteImg
    }
]

const Monitoring =()=>{
    
    const classes =useStyles()

    return(
    
        <>
        <Container maxWidth='lg'>
            <Box className={classes.root} py={5} >
            
               
                    <Typography variant='h4' color='secondary' align='center' gutterBottom>
                        Monitoring and Evaluation Management
                    </Typography>

                    <Typography color='textSecondary'>
                        Our M&E department provides you with professional 
                        monitoring and evaluation services to support 
                        strategic decision-making. We help you track your 
                        progress across the continuum of your project. 
                        This helps you fast-track
                        your goals while minimizing resources 
                        utilization and optimizing outputs per resource input.
                    </Typography>
                

            <Box py={4}>
                <Grid container spacing={3}>
                    {CardDetails.map((item,index)=>(
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={index}>
                            <Card elevation={0} className={classes.card}>
                                <Image src={item.image} height={250} />

                              <CardContent className={classes.cardItems}>
                                <Typography variant='h4' gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography color='textSecondary' variant='body2'>
                                    {item.description}
                                </Typography>
                              </CardContent> 
                             
                            </Card>
                            </Grid>
                    ))}
                </Grid>
            </Box>

            <Box >
                <Button 
                    variant='outlined' 
                    color='secondary'
                    component={Link}
                    to="/monitoring-and-evaluation" 
                >
                    More Services
                </Button>
            </Box>
           
            </Box>
            </Container>
        
        </>
    )
}

export default React.memo(Monitoring);