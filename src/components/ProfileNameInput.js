import React from "react"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function ProfileNameInput(props) {
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField 
                        id="input-with-icon-grid" 
                        label="Username"
                        onChange={props.handleUsernameChange} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileNameInput
