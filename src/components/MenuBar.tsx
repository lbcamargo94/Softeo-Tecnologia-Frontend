import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MenuBar() {
  let navigate = useNavigate();
  return (
    <NavBar>
      <NavLink>
        <Link onClick={() => navigate("/")}>Clientes</Link>
      </NavLink>
      <NavLink>
        <Link onClick={() => navigate("/purchases")}>Contratos</Link>
      </NavLink>
      <NavLink>
        <Link onClick={() => navigate("/treatments")}>Tratamentos</Link>
      </NavLink>
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  height: 2rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const NavLink = styled.div`
  width: 100%;
  height: 100%;
`;

const Link = styled.button`
  width: 100%;
  height: 100%;
  border: 1px outset;
  background-color: whitesmoke;
  padding: 0.5rem;
`;
