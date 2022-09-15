import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();

  return (
    <Container>
      <Box>
        <Text>Clientes</Text>
        <Button onClick={() => navigate("/register")}>Novo Cliente</Button>
      </Box>
      <BoxCards>
        <ProfileCard>
          Profile Card
        </ProfileCard>
      </BoxCards>
    </Container>
  );
}

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

const Box = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 2rem;
  width: 100%;
`;

const Text = styled.h3`
  margin: 1rem;
`;

const Button = styled.h3`
  margin: 1rem;
  border: 1px outset;
  border-radius: 0.5rem;
  font-size: 16px;
  padding: 0.5rem;
  height: 2rem;
  width: 7.5rem;
  align-items: center;
  text-align: center;
  background-color: #2cc0d3;
  color: #ffffff;
  display: flex;
  justify-content: center;
`;

const BoxCards = styled.div`

`;

const ProfileCard = styled.div`
  box-shadow: 0.5rem 0.5rem 3rem 0.5rem #000000;
`;
