import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    approverChip: {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
      flexGrow: 1,
      textAlign: 'center'
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }));

export default function Header(props) {
    const classes = useStyles();
    
    let approverChip;
    if (props.isConnected) {
      approverChip = <Chip className={classes.approverChip} label="APPROVER" variant="outlined"/>
    }

    let connectedChip;
    if (props.isConnected) {
      connectedChip = <Chip label="CONNECTED" color="secondary" variant="outlined"/>
    } else {
      connectedChip = <Chip className={classes.disconnectedChip} label="DISCONNECTED" variant="outlined"/>
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" display="inline" className={classes.menuButton} color="secondary" aria-label="menu">
              <AccountBalanceIcon />
              </IconButton>
              <Typography variant="h6" display="inline" className={classes.title} color="secondary" noWrap>MultiSig Wallet</Typography>

              {/* {approverChip} */}

              {connectedChip}
            </Toolbar>
        </AppBar>
    );
}
