import React from 'react'
import Logo from '../components/Logo'
import { Container, Title } from '../styles/components/Header'

export default function Header() {
  return (
    <Container>
      <Logo />
      <Title>Odonto Customer Management</Title>
    </Container>
  )
}
