import React, { useEffect, useState } from "react";


import Category from '../../assets/Category.svg'
import { Container, CategoryImg, ContainerItens, Image,Button } from "./style";
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'




export function CategoryCarrossel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        async function LoadCategories() {
            const { data } = await api.get("categories")
            
         setCategories(data)
        }
        
        LoadCategories()
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
            <CategoryImg src={Category} alt='logo da categoria' />


<Carousel itemsToShow={5} style={{width: '90%'}} breakPoints={breakPoints}>
                {categories &&
                    categories.map(category => (
                        <ContainerItens key={category.id}>
                            <Image src={category.url} alt="foto da categoria" />
                            <Button to={{ pathname: '/produtos' }}>{category.name }</Button>
                        </ContainerItens>
                    ))}
</Carousel>
            

        </Container>
    )
}

