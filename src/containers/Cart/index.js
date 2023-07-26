import React from 'react'

import CartLogo from '../../assets/cart image.png'

import { Container, CartImg, Wrapper } from './style'

import { CartItems, CartResume } from '../../components'





export function Cart() {
    return (
    
           
            <Container>
            <CartImg src={CartLogo} alt='logo da home' />
                <CartItems />

                <Wrapper>
                <CartResume />
            </Wrapper>

            </Container>

            

    )
}
