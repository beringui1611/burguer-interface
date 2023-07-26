
import React from "react"

import { useCart } from "../../hooks/CartContext"
import { Container, Header, Body, EmptyCart } from "./style"
import formatCurrency from "../../utils/formatCurrency"





export function CartItems() {
    const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } = useCart()
    console.log(cartProducts)






    return (
        <Container>

            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: "30px" }}>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} alt="foto do produto " />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className="quantityContainer">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>


                        </div>

                        
                        <button className="trash"  onClick={ () => deleteProducts(product.id) }>remover</button>

                        <p>{formatCurrency(product.quantity * product.price)}</p>

                   

                    </Body>
                ))
                : <EmptyCart> carrinho  Vazio</EmptyCart>
            }

        </Container>
    )
}