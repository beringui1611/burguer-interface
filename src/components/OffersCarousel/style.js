import styled from 'styled-components'


export const Container = styled.div`
background-color: #FFF;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0 ;

.rec.rec-arrow{
  background-color:#9758A6 ;
  color: #FFF;
}

.rec.rec-arrow:hover{
    border:2px solid #9758A6 ;
    background-color:#FFF ;
    color: #9758A6;
}
.rec.rec-arrow:disabled{
    border: none;
    background-color: grey;
    color: #FFF;
}
`

export const CategoryImg = styled.img`

`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;

p{
    color: var(--theme-gray-800, #424242);
font-family: Source Sans Pro;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 26.4px */
}

`

export const Image = styled.img`
width: 200px;
border-radius: 10px;
margin-bottom: 16px;
`

export const Button = styled.button`
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

&:hover{
    opacity: 0.8;
}

&:active{
   opacity :0.6 ;
}

`