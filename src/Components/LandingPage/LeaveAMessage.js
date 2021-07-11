import React from 'react';
import {
    Box, Container, Typography, Grid, TextField, Button, Hidden,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LeaveMessageImg from "../../Assets/Images/leaveMessage.png";
import SendIcon from '@material-ui/icons/Send';

const useStyles =makeStyles((theme)=>({
    root:{
        backgroundColor:theme.palette.white
    },
    formMessage:{
        '& label.Mui-focused': {
            color: theme.palette.primary.main,
        },

        '& .MuiOutlinedInput-root':{
            marginBottom:theme.spacing(3),
            '& fieldset':{
                borderColor:theme.palette.primary.main
            },
            '&:hover fieldset':{
                borderColor: theme.palette.primary.light
            },
            '&.Mui-focused fieldset':{
                borderColor:theme.palette.primary.main
            }
        }
    },

    sendMessageBtn:{
        '&.MuiButton-root':{
            padding:theme.spacing(2),
            borderRadius:0,
            textTransform:"none",
            width:300
        },
        '& .MuiButton-endIcon':{
            marginLeft:"auto"
        }
    }
}))

const LeaveAMessage =() =>{
    const classes =useStyles()
return (
    <Box className={classes.root} py={4}>
        <Container>
            <Box py={5}>
                <Typography variant="h4" align="center">
                    Leave us a message and we will get back to you.
                </Typography>
            </Box>
            <Grid container>
                <Hidden only={['xs','sm']}>
                    <Grid item lg={6}>
                        <img src={LeaveMessageImg} height={450} alt=''/>
                    </Grid>
                </Hidden>

                <Grid item lg={6}>
                    <form noValidate autoComplete="off" className={classes.formMessage}>
                        <TextField
                            variant="outlined"
                            label="Your Name"
                            fullWidth={true}
                        />

                        <TextField
                            type="email"
                            variant="outlined"
                            label="Email"
                            fullWidth={true}
                        />

                        <TextField
                            variant="outlined"
                            label="Message"
                            multiline
                            rows={7}
                            fullWidth={true}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            endIcon={<SendIcon/>}
                            className={classes.sendMessageBtn}
                        >
                            Send Message
                        </Button>
                    </form>

                </Grid>
            </Grid>
        </Container>
    </Box>
)
}
export default LeaveAMessage;