import React, { useEffect, useState } from "react";


import Offers from '../../assets/OFERTAS.svg'
import { Container, CategoryImg, ContainerItens, Image, Button } from "./style";
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'
import formatCurrency from "../../utils/formatCurrency";
import {useCart} from '../../hooks/CartContext'

export function OffersCarousel() {

    const {putProductInCart} = useCart()

    const [offers, setOffers] = useState([])

    useEffect(() => {

        async function LoadOffers() {
            const { data } = await api.get("products")
            
            const onlyOffers = data.filter(product => product.offer).map(product => {
                return {...product, formatedPrice: formatCurrency(product.price)}
            })
            
         setOffers(onlyOffers)
        }
        
        LoadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        {width: 1300, itemsToShow: 5 }
    ]


    return (
        <Container>
            <CategoryImg src={Offers} alt='logo da oferta' />


<Carousel itemsToShow={5} style={{width: '90%'}} breakPoints={breakPoints}>
                {offers &&
                   offers.map(product => (
                        <ContainerItens key={product.id}>
                           <Image src={product.url} alt="foto do produto" />
                           <p> {product.name}</p>
                           <p> {product.formatedPrice}</p>
                            <Button to={{pathname:'/carrinho'}} onClick={() => putProductInCart(product)}>Peça Agora</Button>
                        </ContainerItens>
                    ))}
</Carousel>
            

        </Container>
    )
}

