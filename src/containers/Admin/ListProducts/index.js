import React, { useState, useEffect } from 'react'
import api from '../../../services/api'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';

import { useHistory } from 'react-router-dom';


import formatCurrency from '../../../utils/formatCurrency'




import {
  Container,
  IMG,
Edit,
} from './style'
import paths from '../../../constants/path';


function ListProducts() {
   

  const {push} = useHistory()

   const [products, setProducts] = useState()

  useEffect(() => {
    async function loadOrders() {
        const { data } = await api.get('products')
        
        
      setProducts(data)
    }
    loadOrders()
  }, [])
   
   
   function isOffer(offSatus) {
     if (offSatus) {
    return  <CheckBoxIcon style={{color: '#32CD32'}}/>
     }
     return <CancelIcon style={{color: '#FF0000'}}/>
   }

   function editProducts(product) {
     push(paths.EditProducts, {product})
   }

  return (
    <Container>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align='center'>Produto em Oferta</TableCell>
            <TableCell align='center'>Imagem do Produto</TableCell>
            <TableCell>Editar Produto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell >{formatCurrency(product.price)}</TableCell>
              <TableCell align='center' >{isOffer(product.offer)}</TableCell>
              <TableCell align='center' ><IMG src={product.url} alt='imagens dos produtos'/></TableCell>
              <TableCell ><Edit onClick={() => editProducts(product)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default ListProducts