import React from 'react'

import { Container, ContainerItens } from './style'
import { Orders } from './Orders'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import { PropTypes } from 'prop-types'
import paths from '../../constants/path'
import NewProducts from './NewProducts'
import EditProducts from './EditProducts'




export function Admin({ match: { path } }) {
   
    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItens>
                {path === paths.Order && <Orders />}
                {path === paths.Products && <ListProducts />}
                {path === paths.NewProducts && <NewProducts />}
                { path === paths.EditProducts &&  <EditProducts/>}
            </ContainerItens>
           
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
path: PropTypes.string
    })
}

