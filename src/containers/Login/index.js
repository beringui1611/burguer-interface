import React  from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useUser } from '../../hooks/UserContext'
import { Link, useHistory } from 'react-router-dom'


import { Button } from '../../components/'
import {
  Container,
  ImageLogin,
  ContainerItens,
  P,
  Input,
  SignInLink,
  Logo,
  ErrorMessage
  
} from './styles'

import BurguerLogin from '../../assets/burger.svg'
import LogoImg from '../../assets/logo.svg'

export function Login() {

  const history = useHistory()

  const { putUserData } = useUser()
  
 

  const schema = Yup.object().shape({
    email: Yup.string().email("digite um email valido").required("O email é obrigatorio "),
    password: Yup.string().required("A senha é obrigatorio").min(6, "A senha deve ter pelo menos 6 digitos")
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  
  const onSubmit = async clientData => {
    const {data} = await toast.promise(
      api.post('sessions', {
      email: clientData.email,
      password: clientData.password
      }),
      {
        pending: "verificando seus dados",
        success: "seja bem-vindo(a)",
        error: "verifque seu email e senha "
      }
    )
    putUserData(data)

    setTimeout(() => {
      history.push('/')
    }, 1000)

   
    
  }
  


  
  return (
    <Container>

      <ImageLogin src={BurguerLogin} alt='hamburguer-image' />
      
      <ContainerItens>

        <Logo src={LogoImg} alt='logo' />


        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <P>Email</P>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        
        <P>Password</P>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        
          <Button style={{marginTop: "75px"}} type="submit">Sign In</Button>
          
          </form>

        <SignInLink>Não possui conta ? <Link to="/cadastro">Sign Up</Link>
        </SignInLink>

      </ContainerItens>
      

   </Container>
  )
}


