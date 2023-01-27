import * as React from 'react';
import { useEffect, useState } from 'react';
import { mockCustomerTransactions } from '../mockData/customerTransactions';
import { returnRewards } from '../utils/utils';
import { OCTOBER,NOVEMBER, DECEMBER, TOTALPOINTS, NAME, SAMPLEURL, GET} from '../constants/constants';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PointsTable() {

    const [customerTransactions, setCustomerTransactions] = useState([]);
    const [rows,setRows] = useState([]);

    useEffect(() => {
        fetch(SAMPLEURL, {method: GET})
        .then(response => console.log('response', response))
        .catch(error => setCustomerTransactions(mockCustomerTransactions));
    },[]);

    useEffect(()=>{
        setRows(returnRewards(customerTransactions));
    },[customerTransactions])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{NAME}</TableCell>
            <TableCell align="right">{TOTALPOINTS}</TableCell>
            <TableCell align="right">{OCTOBER}&nbsp;</TableCell>
            <TableCell align="right">{NOVEMBER}&nbsp;</TableCell>
            <TableCell align="right">{DECEMBER}&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.totalPoints}</TableCell>
              <TableCell align="right">{row.october}</TableCell>
              <TableCell align="right">{row.november}</TableCell>
              <TableCell align="right">{row.december}</TableCell>
            </TableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
