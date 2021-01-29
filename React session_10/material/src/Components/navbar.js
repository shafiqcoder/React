import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'block',
        // position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            display: 'block',

        },
    },
}));
export default function Navbar() {
    const classes = useStyles();
    return (

        <div className={classes.root}>


            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" align="left" noWrap="true" >
                        PAKISTAN
                    </Typography>
                    <Typography className={classes.title} variant="h7" align="right" noWrap="bool" >
                        COVID-19 Live Update <br />
                        @shafiqcoder
                    </Typography>
                </Toolbar>
            </AppBar>

            <h5 style={{ textAlign: "center", color: "red" }}>- KNOW ABOUT COVID-19<br />
            See the Realtime Pakistan
COVID-19 Situation!</h5><br />
            <h4>PAKISTAN statistics</h4>

        </div>
    );
}