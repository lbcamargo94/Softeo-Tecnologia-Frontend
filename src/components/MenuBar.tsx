import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, NavBar, NavLink } from '../styles/components/MenuBar'

export default function MenuBar() {
  let navigate = useNavigate()
  return (
    <NavBar>
      <NavLink>
        <Button onClick={() => navigate('/')}>Clientes</Button>
      </NavLink>
      <NavLink>
        <Button onClick={() => navigate('/purchases')}>Contratos</Button>
      </NavLink>
      <NavLink>
        <Button onClick={() => navigate('/treatments')}>Tratamentos</Button>
      </NavLink>
    </NavBar>
  )
}
