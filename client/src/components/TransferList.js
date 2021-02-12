import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react'
import { Button, Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    table: {
        background: theme.palette.background.default,
        fontColor: theme.palette.secondary.main,
        borderColor: theme.palette.background.default,
        
    },
    tableContainer: {
        background: theme.palette.background.default
    },
    tableCell: {
        color: theme.palette.secondary.main,
        borderColor: "#1b4038"
        // borderColor: theme.palette.primary.main
    },
  }));

function TransferList({transfers, approveTransfer}) {
    const classes = useStyles();

    return (
         <TableContainer className={classes.tableContainer}>
            <Table className={classes.table}>

                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}>ID</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Amount</TableCell>
                        <TableCell align="center" className={classes.tableCell}>To</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Approvals</TableCell>
                        <TableCell align="center" className={classes.tableCell}>Sent</TableCell>
                        <TableCell align="center" className={classes.tableCell}></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {transfers.map(transfer => (
                        <TableRow key={transfer.id}>
                            <TableCell component="th" scope="row" className={classes.tableCell}>
                                {transfer.id}
                            </TableCell>
                            <TableCell align="center" className={classes.tableCell}>{transfer.amount}</TableCell>
                            <TableCell align="center" className={classes.tableCell}>{transfer.to}</TableCell>
                            <TableCell align="center" className={classes.tableCell}>{transfer.approvals}</TableCell>
                            <TableCell align="center" className={classes.tableCell}>
                                <Checkbox
                                    checked={transfer.sent}
                                    color='secondary'
                                />
                            </TableCell>
                            <TableCell align="center" className={classes.tableCell}><Button color='secondary' onClick={() => approveTransfer(transfer.id)}>Approve</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
         </TableContainer>
    );
}

export default TransferList;