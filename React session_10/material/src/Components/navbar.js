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
        display: 'none',
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
                    <Typography className={classes.title} align="center" variant="h3" >
                        PAKISTAN live update
          </Typography>
                </Toolbar>
            </AppBar>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} align="center" variant="h7" >
                        Covid-19 Tracker (source: covid.gov.pk) <br />
@shafiqcoder
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}