import {
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  textInput: {
    overflow: "hidden",
    borderRadius: 4,
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    input: {
      background: "red",
      color: "green",
    },
    // "& input + fieldset": {
    //   borderColor: "green",
    //   borderWidth: 2,
    // },
    // "& input:invalid + fieldset": {
    //   borderColor: "red",
    //   borderWidth: 2,
    // },
    // "&:hover": {
    //   color: "secondary",
    // },
    // "&$focused": {
    //   boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
    //   borderColor: theme.palette.primary.main,
    // },
  },
  divider: {
    background: theme.palette.secondary.main,
  },
  approvesContainer: {
    paddingTop: "30px",
  }
}));

function NewTransfer({ createTransfer }) {
  const classes = useStyles();

  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  return (
    <Container>
      <Toolbar />
      <form>
        <Grid container spacing={7} className={classes.approvesContainer}>
          <Grid item xs={12} align="center">
            <Typography variant="h4" color="secondary" align="center">
              Create Transfer
            </Typography>
            <Divider variant="middle" className={classes.divider} width="22%" />
          </Grid>

          <Grid item xs={12} align="center">
            <TextField
              required
              id="transfer-amount"
              className={classes.textInput}
              label="Amount"
              onChange={(e) => updateTransfer(e, "amount")}
              color="secondary"
            />
          </Grid>

          <Grid item xs={12} align="center">
            <TextField
              required
              id="transfer-to"
              className={classes.textInput}
              label="To"
              onChange={(e) => updateTransfer(e, "to")}
              color="secondary"
            />
          </Grid>

          <Grid item xs={12} align="center">
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={() => createTransfer(transfer)}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default NewTransfer;
