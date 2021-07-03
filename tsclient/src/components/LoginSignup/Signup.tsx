import {Avatar, Button, Checkbox, FormControl, FormControlLabel, Grid, Paper, TextField} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {indigo, pink} from "@material-ui/core/colors";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Typography} from "@material-ui/core";
import {Input,InputLabel,FormHelperText} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    blue: {
        color: '#fff',
        backgroundColor: indigo[400],
    },
headerStyle:{
        margin:2
},
    btnStyle:{
        margin:"10px auto"
    },
}));


const Signup = () => {
    const classes = useStyles();
    const paperStyle = {padding: '20px', height: '70vh', width: 300, margin: "20px auto"};
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid container justify="center" direction={"column"} alignItems={"center"}>
                    <Avatar className={classes.blue}><PermIdentityIcon/></Avatar>
                    <h2 className={classes.headerStyle}>Sign up</h2>
                    <Typography variant={'caption'}>Please fill this form to create your Account</Typography>
                </Grid>
                <form>
                    <TextField label={'Name'} fullWidth/>
                    <TextField label={'e-mail'} fullWidth/>
                    <TextField label={'Password'} type={'password'} fullWidth/>
                    <TextField label={'Confirm Password'} type={'password'} fullWidth/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checked"
                                color="primary"
                            />
                        }
                        label="I accept all the terms and conditions"
                    />
                    <Button type="submit" variant="contained" color="primary" className={classes.btnStyle}>
                        Sign up
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
}
export default Signup;