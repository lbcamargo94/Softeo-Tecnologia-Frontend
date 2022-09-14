import React from "react";
import Logo from "../components/Logo";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Logo />
      <Title>Odonto Customer Management</Title>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  margin: 0 1rem;
  background-color: #2cc0d3;
`;

const Title = styled.h1`
  text-align: center;
  background-color: #2cc0d3;
  max-width: 15rem;
  font-size: 1.5rem;
  color: #f5f5f5;
`;
