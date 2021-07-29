import React,{useState} from 'react';
import {
    Box,Container,Grid,Typography,FormGroup,Button,FormControlLabel,TextField,Checkbox,IconButton,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Logo from "../../Components/Logo";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";

const useStyles =makeStyles((theme)=>({
    loginBox:{
        padding:theme.spacing(4),
        boxShadow:`rgba(0,0,0,0.35) 0px 5px 15px`,
        margin:"70px auto",
        width:"80%",
        [theme.breakpoints.down('md')]:{
            padding:theme.spacing(2),
            width:"90%"
        }
    },
    loginForm:{
        '& input':{
            padding:theme.spacing(2),
            
        }
    },
    formControl:{
        justifyContent:"space-between",
    },
    loginBtn:{
        textTransform:"none",
        width:"60%",
        borderRadius:0,
        padding:theme.spacing(1),
        marginTop:theme.spacing(2),
        fontWeight:"bold"
    },
    forgotPass:{
        lineHeight:"50px"
    }
}))


const Login =()=>{
    const classes =useStyles();
    const [checked,setChecked] =useState(false)
    const handleChange =(event)=>{
        setChecked(event.target.checked)
    }
    return(
       <Container maxWidth={false}>
               <Box className={classes.loginBox}>
                   <Grid container item justify="space-between">
                       <Logo width={100}/>

                       <IconButton component={Link} to="/">
                           <ArrowBackIcon fontSize="large" color="primary"/>
                       </IconButton>

                       <Grid container item>
                           <Box py={4}>
                               <Typography variant="h4" color="primary">
                                   Sign in
                               </Typography>
                           </Box>

                           <form style={{width:"100%"}} className={classes.loginForm}>
                                   <TextField
                                       fullWidth
                                       label="Email address"
                                       type="email"
                                   />
                                   <TextField
                                       fullWidth
                                       label="Password"
                                       type="password"
                                   />
                               <FormGroup row classes={{root:classes.formControl}}>
                                   <FormControlLabel
                                       control={
                                           <Checkbox
                                               style={{color:"#0093dd"}}
                                               checked={checked}
                                               onChange={handleChange}

                                           />
                                       }
                                       label="Keep me logged in"
                                   />
                                   <Link to="/" className={classes.forgotPass}>Forgot password ?</Link>
                               </FormGroup>
                               <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.loginBtn}
                                    component={Link}
                                    to="/admin/dashboard" 
                               >
                                   Sign in
                               </Button>
                           </form>

                       </Grid>
                   </Grid>

               </Box>
       </Container>
    )
}

export default Login;