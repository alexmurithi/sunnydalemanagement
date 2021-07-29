import React, { useState } from 'react';
import { items } from './MonitoringMenu';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    ButtonGroup,
    Container
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';



const useStyles =makeStyles((theme)=>({
    form:{
       
    }
}))

const ContactForm =()=>{
    const classes = useStyles()

    const [service,setService] =useState('')
    const handleChange =(event) =>{
        setService(event.target.value)
    }
    return(
        <>
        <Container>
           <Card elevation={0}> 
            <CardContent>
                <Typography 
                    variant='body2' 
                    color="textPrimary"
                    gutterBottom 
                >
                    We are so pleased you trusted us to help 
                    in monitoring and evalution services.
                </Typography>

                <Typography 
                    variant='body2' 
                    color='textSecondary'
                    gutterBottom
                >
                    Let Us Know what you are looking for!
                </Typography>

                <form style={{padding:"8px 0"}} className={classes.form}>
                    <TextField  
                        label="Name"
                        placeholder="Your Name"
                        variant="outlined"
                        fullWidth
                        margin='dense' 
                    />
                    <TextField  
                        label="Email"
                        placeholder="you@example.com"
                        variant="outlined"
                        fullWidth
                        margin='dense' 
                    />
                <FormControl variant="outlined" fullWidth margin='dense'>
                     <InputLabel>Services</InputLabel>
                            <Select
                            
                              value={service}
                              onChange={handleChange}
                            label="Services"
                            >
                            {items.map((item,index)=>(
                                <MenuItem key={index} value={item.title}>
                                    {item.title}
                                </MenuItem>
                            ))}
                            </Select>
                </FormControl>
                    <TextField  
                        label="Message"
                        placeholder="Type here ..."
                        variant="outlined"
                        fullWidth
                        margin='dense'
                        multiline
                        rows={3} 
                    />

                    <Button 
                        variant='outlined'
                        color='secondary' 
                    >
                        Send Message
                    </Button>
                </form>
            </CardContent>
           </Card>

           <Typography align="center">Or</Typography>

           <Card elevation={0}>
               <CardContent>
                   <Typography 
                        color='textPrimary' 
                        variant='h4' 
                        gutterBottom 
                   >
                       Talk to us directly
                   </Typography>

                   <Typography 
                        color='textSecondary' 
                        variant='caption' 
                        gutterBottom 
                   >
                       Via a call or Whatsapp
                   </Typography>

                   <ButtonGroup 
                        orientation="vertical"
                        fullWidth
                        size='large'
                        disableElevation
                        disableRipple  
                   >
                   <Button 
                        color='secondary' 
                        variant='outlined'
                        startIcon={<WhatsAppIcon/>}
                        endIcon={<PhoneIcon/>}
                   >
                       +254715907041
                   </Button>
                   <Button 
                        color='secondary' 
                        variant='outlined'
                        startIcon={<WhatsAppIcon/>}
                        endIcon={<PhoneIcon/>}
                   >
                       +254725713687
                   </Button>
                   </ButtonGroup>

                   
               </CardContent>
              
           </Card>
           </Container> 
        </>

        
    )
    
}

export default ContactForm;