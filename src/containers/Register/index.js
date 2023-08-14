import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import { Link } from 'react-router-dom'


import {Button, ErrorMessage} from '../../components'
import {
  Container,
  ImageRegister,
  ContainerItens,
  P,
  Input,
  SignInLink,
  Logo
  
} from './styles'

import RegisterImage from '../../assets/register.svg'
import LogoImg from '../../assets/logo.svg'
import { toast } from 'react-toastify'

export function Register() {


  const schema = Yup.object().shape({
    name: Yup.string().required("O seu nome é obrigatorio"),
    email: Yup.string().email("digite um email valido").required("O email é obrigatorio "),
    password: Yup.string().required("A senha é obrigatoria").min(6, "A senha deve ter pelo menos 6 digitos"),
    confirmPassword: Yup.string().required("A senha é obrigatoria").min(6, "A senha deve ter pelo menos 6 digitos").oneOf([Yup.ref('password')], "as senhas devem ser iguais")
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  
  const onSubmit = async clientData => {

    try {
     const {status} = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('cadastro criado com sucesso')

      }
      else if (status === 409) {
        toast.error("e-mail já cadastrado faça login para continuar")
      } else {
        throw new Error()
      }

    
    } catch (err) {
      toast.error("Falha no sistema Tente novamente ")
      
    }
  }
  


  
  return (
    <Container>

      <ImageRegister src={RegisterImage} alt='hamburguer-image' />
      
      <ContainerItens>

        <Logo src={LogoImg} alt='logo' />


        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <P>Name</P>
          <Input type="text" {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>


        <P>Email</P>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        
        <P>Senha</P>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <P>confirmar Senha</P>
          <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        
          <Button style={{marginTop: "75px"}} type="submit">Sign Up</Button>
          
          </form>

        <SignInLink>Já possui conta ? <Link to="/login">Sign In</Link>
        </SignInLink>

      </ContainerItens>
      

   </Container>
  )
}


