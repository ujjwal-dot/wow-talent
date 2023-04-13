import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { blue, grey } from '@mui/material/colors';
import '../style.css'
import { format } from 'date-fns';

const ListView = () => {
  
  const[items,setData]=useState([])

  useEffect(()=>{
    axios.get('https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10')
    .then(response=>{
      // console.log(response.data.data.data)
      setData(response.data.data.data)
    })
      .catch(error=>{
       console.log(error)
    })
  },[])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      
      //backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      color: theme.palette.common.white,
      
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  return (
    <div className='table'>

   
    <TableContainer component={Paper} sx={{backgroundColor:'#31384b',padding:'5px'}}>
    <Table sx={{maxWidth:'96vw' ,backgroundColor: '#31384b',padding:'5px 10px'}} aria-label="customized table">
      <TableHead sx={{backgroundColor:'#161c32'}}>
        <TableRow >
          <StyledTableCell align='center'>Date</StyledTableCell>
          <StyledTableCell align="center">Day Install</StyledTableCell>
          <StyledTableCell align="center">Platform</StyledTableCell>
          <StyledTableCell align="center">Day Uninstall</StyledTableCell>
          <StyledTableCell align="center">Churn platform</StyledTableCell>
          <StyledTableCell align="center">ChurnTotal</StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody >
        {items.map((row) => (
          <StyledTableRow key={row.created_At}>
            <StyledTableCell component="th" scope="row"align='center'>
              {format(new Date(row.created_At),'p,dd/MM/yyyy')}
            </StyledTableCell>
            <StyledTableCell align="center">{row.totalinstall}</StyledTableCell>
            <StyledTableCell align="center">{row.android_churn}</StyledTableCell>
            <StyledTableCell align="center">{row.totaluninstall}</StyledTableCell>
            <StyledTableCell align="center">{row.ios_churn}</StyledTableCell>
            <StyledTableCell align="center">{row.totalchurn}</StyledTableCell>

          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default ListView