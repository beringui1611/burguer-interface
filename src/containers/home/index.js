import React from 'react'

import HomeLogo from '../../assets/burguerhome.svg'

import { Container, HomeImg } from './style'
import { CategoryCarrossel, OffersCarousel } from '../../components'




export function Home() {
    return (
        <Container>

            <HomeImg src={HomeLogo} alt='logo da home' />
            
            <CategoryCarrossel />
            <OffersCarousel/>

        </Container>
    )
}
