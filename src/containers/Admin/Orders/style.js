import ReactSelect from 'react-select'

import styled from "styled-components";


export const Container = styled.div`
background: #EFEFEF;
min-height: 100vh;

`

export const ProductsImg = styled.img`
width: 60px;
border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
width:250px;

.css-1fdsijx-ValueContainer{
    cursor: pointer;
}
`

export const Menu = styled.div`
display: flex;
gap: 50px;
justify-content: center;
margin: 20px 0px;
`

export const LinkMenu = styled.a`
color: var(--gray-gray-1, #323D5D);
cursor: pointer;
font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
border-bottom: ${props => (props.isActiveStatus ? '2px solid #9758A6' : 'none')};
padding-bottom: 5px;
`