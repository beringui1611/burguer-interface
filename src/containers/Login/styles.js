import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
background-color: #373737;
`




export const Logo = styled.img`
margin-top: 104px;
margin-left: auto;
margin-right: auto;
display: block;
`

export const ImageLogin = styled.img`
height: 100vh;



`


export const ContainerItens = styled.div`
margin-left: auto;
margin-right: auto;
display: block;

h1{
    margin-top: 170px;
    text-align: center;
    color: #FFF;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
}


`


export const P = styled.p`
margin-top: 30px;
color: #FFF;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
`


export const Input = styled.input`
width: 391.416px;
height: 38.319px;
margin-left: auto;
margin-right: auto;
display: block;
border-radius: 5px;
background: #FFF;
box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
outline: none;
padding: 20px;
border: ${props => (props.error ? '2px solid #CC1717' : 'none')};

`





export const SignInLink = styled.p`
margin-top: 28px;
color: #EEE;
margin-left: 100px;
display: block;
color: #FFF;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;

a{
    color: #FFF;

}

`


export const ErrorMessage = styled.p`
color: #CC1717;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 5px;
`
