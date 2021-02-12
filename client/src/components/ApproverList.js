import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";

const useStyles = makeStyles((theme) => ({
  approvesContainer: {
    paddingTop: "30px",
  },
  divider: {
    background: theme.palette.secondary.main,
  },
}));

function ApproverList({ approvers, quorum }) {
  const classes = useStyles();

  const approverList = approvers.map((approver) => (
    <Typography variant="h6" color="secondary">
      {approver}
    </Typography>
  ));

  const listItemsWithDividers = [];
  approverList.forEach((approver, index) => {
    listItemsWithDividers.push(approver);
    if (approverList[index + 1] !== undefined) {
      listItemsWithDividers.push(<MoreVertIcon color="secondary" />);
    }
  });

  return (
    <Container>
      <Toolbar />
      <Grid container spacing={4} className={classes.approvesContainer}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" color="secondary" align="center">
            Approvers
          </Typography>
          <Divider variant="middle" className={classes.divider} width="15%" />
        </Grid>

        <Grid item xs={12} align="center">
          <Typography variant="h6" color="secondary" align="center">
            Quorum: {quorum}
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          {listItemsWithDividers}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ApproverList;
