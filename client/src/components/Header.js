import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    disconnectedChip: {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header(props) {
    const classes = useStyles();
    
    let connectedChip;
    if (props.isConnected) {
      connectedChip = <Chip label="CONNECTED" color="secondary" variant="outlined"/>
    } else {
      connectedChip = <Chip className={classes.disconnectedChip} label="DISCONNECTED" variant="outlined"/>
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
                <AccountBalanceIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} color="secondary">
                MultiSig Wallet
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
                {connectedChip}
            </Toolbar>
        </AppBar>
    );
}
