
import styled from "styled-components"
import { Link } from 'react-router-dom'


export const Container = styled.div`
background: #3C3C3C;
box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
width: 300px;
top: 0;
left: 0;

hr{
    margin: 50px 15px;
}
`

export const ListLink = styled(Link)`
text-decoration: none;
color:#FFFFFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left:5px;
`

export const ItemContainer = styled.div`
height: 50px;
display: flex;
align-items: center;
border-radius: 2px;
background: ${props =>( props.isActive ?'#565656' : 'none')};
margin: 8px;
padding-left: 20px;

.icon{
    color: white;
}
`