import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import GetAppIcon from "@material-ui/icons/GetApp";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import { Link } from "react-router-dom";

import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.main,
  },
  drawerContainer: {
    overflow: "auto",
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
}));

export default function Navigation(props) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <ListAltIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Transactions" />
            </ListItem>
          </Link>

          <Link to="/approvers" className={classes.link} disabled>
            <ListItem button>
              <ListItemIcon>
                <CheckBoxOutlinedIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Approvers" />
            </ListItem>
          </Link>

          <Link to="/send" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <PresentToAllIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Send" />
            </ListItem>
          </Link>

          <Link to="/receive" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <GetAppIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Receive" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
}
