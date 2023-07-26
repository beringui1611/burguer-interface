import React, {useState, useEffect} from 'react'

import { useCart } from '../../hooks/CartContext'

import { Container } from './style'

import { Button } from '../Button'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'
import {toast} from 'react-toastify'







export function CartResume() {

  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)


  const { cartProducts } = useCart()
  
  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  },[cartProducts, deliveryTax])


  const submitOrder = async () => {
    const order = cartProducts.map(product => {
    return {id: product.id, quantity: product.quantity}
    })
    
    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando seu pedido',
      success: 'Pedido realizado com sucesso',
      error: 'falha no seu pedido, tente novamente'
    })
}   
      
      
      





  return (
      <div>
      <Container>
        <div className='container-top'>
        <h2 className='title'>Resumo do pedido</h2>
          <p className='itens'>itens</p>
          <p className='itens-price'>{formatCurrency(finalPrice) }</p>
          <p className='delivery-tax'>Taxa de entrega</p>
          <p className='delivery-price'>{formatCurrency(deliveryTax) }</p>
        </div>
        <div className='container-bottom'>
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      
      </Container>

<Button style={{width: "100%", marginTop:30}} onClick={submitOrder}>Finalizar pedido</Button>
      </div>
    )
}
