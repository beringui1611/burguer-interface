import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import ProductsLogo from '../../assets/product.svg'

import { Container, ProductsImg, CategoryButton, Menu, ProductsContainer } from './style'
import {CardProduct} from '../../components'
import formatCurrency from '../../utils/formatCurrency'
import PropTypes from'prop-types'





export function Products() {
 

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)


    useEffect(() => {

        async function LoadCategories() {
            const { data } = await api.get("categories")
            
            const newCategories = [{id: 0, name: "todas"},{id: 200, name: "outros"}, ...data]


         setCategories(newCategories)
        }
        
        LoadCategories()
    }, [])


    useEffect(() => {

        async function LoadProducts() {

            const { data: allProducts } = await api.get("products")

            const newProducts = allProducts.map(product => {
                return {...product, formatedPrice: formatCurrency(product.price)}
            })
   

         setProducts(newProducts)
        }
        
        LoadProducts()
       
    }, [])


    useEffect(() => {
        if (activeCategory === 0) {
            setFilterProducts(products)
        } else {
            
        
            const newFilterProducts = products.filter(product => product.category_id === activeCategory)
        
            setFilterProducts(newFilterProducts)
        }
    },[activeCategory, products])



    return (
        <Container>

            <ProductsImg src={ProductsLogo} alt='logo da home' />
<Menu>
                {categories && categories.map(category => <CategoryButton
                    type="button"
                    key={category.id}
                    onClick={() => { setActiveCategory(category.id) }}
                    isActiveCategory={activeCategory === category.id}>
                    {category.name}</CategoryButton>)}
            
            </Menu>
            
            <ProductsContainer>
                {filterProducts && filterProducts.map(product =>(
                
                <CardProduct key={product.id} product={product} />
               ))}

            </ProductsContainer>

        </Container>
    )
}


Products.propTypes = {
    children: PropTypes.string
}