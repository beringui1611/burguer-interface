import styled from 'styled-components'


export const Container = styled.div`
background-color: #ffffff;
padding:10px;
border-radius:10px;
display: flex;
flex-direction: column;
justify-content: space-between;

height:301px ;

.container-top{
    display: grid;
    grid-template-areas:
     'title title'
     'itens itens-price'
     'delivery-tax delivery-price'
    
    ;

    grid-gap: 10px 50px;
}
.title{
    grid-area: title;
    margin-bottom: 20px;
}

.itens{
    grid-area: itens ;
}

.itens-price{
    grid-area: itens-price;
}

.delivery-tax{
    grid-area: delivery-tax;
}

.delivery-price{
    grid-area: delivery-price;
}

.container-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
}

`


