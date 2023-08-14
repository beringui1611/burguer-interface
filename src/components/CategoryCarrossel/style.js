import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`
background-color: #EFEFEF;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0 ;

.rec.rec-arrow{
  background-color:#9758A6 ;
  color: #EFEFEF;
}

.rec.rec-arrow:hover{
    border:2px solid #9758A6 ;
    background-color:#EFEFEF ;
    color: #9758A6;
}
.rec.rec-arrow:disabled{
    border: none;
    background-color: grey;
    color: #EFEFEF;
}
`

export const CategoryImg = styled.img`

`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
`

export const Image = styled.img`
width: 200px;
border-radius: 10px;
`

export const Button = styled(Link)`
margin-top: 16px;
border-radius: 8px;
background: #9758A6;
box-shadow: 0px 20px 40px 0px rgba(151, 88, 166, 0.24), 0px 5px 10px 0px rgba(151, 88, 166, 0.22);
border: none;
padding: 10px 20px;
color: var(--theme-white, #FFF);
text-align: center;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 100%;
cursor: pointer;
text-decoration: none;

&:hover{
    opacity: 0.8;
}

&:active{
   opacity :0.6 ;
}

`