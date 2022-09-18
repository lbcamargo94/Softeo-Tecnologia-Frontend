import React, { useEffect, useState } from "react";
import CustomerCard from "../components/CustomerCard";
import ICustomer from "../interfaces/ICustomer";
import styled from "styled-components";
import { GetCustomer } from "../services/RequestCustomer";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const [customers, useCustomers] = useState<ICustomer[]>([]);
  {
    console.log(customers as ICustomer[]);
  }

  const [loading, useLoading] = useState<boolean>(false);

  useEffect(() => {
    async function requestCustomer() {
      useLoading(true);
      const resultCustomer = await GetCustomer("/");
      useCustomers(resultCustomer);
      useLoading(false);
    }
    requestCustomer();
  }, []);

  return (
    <Container>
      <Box>
        <Text>Clientes</Text>
        <Button onClick={() => navigate("/register")}>Novo Cliente</Button>
      </Box>
      <BoxCards>
        {customers && customers.map((el) => <CustomerCard {...el} />)}
      </BoxCards>
    </Container>
  );
}

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 100%;
`;

const Box = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
  width: 100%;
`;

const Text = styled.h3`
  margin: 1rem;
`;

const Button = styled.h3`
  box-shadow: 0.125rem 0.125rem 0rem 0rem #000000;
  align-items: center;
  background-color: #2cc0d3;
  border-radius: 0.5rem;
  border: 1px outset;
  color: #ffffff;
  display: flex;
  font-size: 16px;
  height: 2rem;
  justify-content: center;
  margin: 1rem;
  padding: 0.5rem;
  text-align: center;
  width: 7.5rem;
`;

const BoxCards = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`;

// const ProfileCard = styled.div`
//   text-align: center;
//   align-items: center;
//   align-content: center;
//   margin: 0.75rem;
//   height: 7.5rem;
//   width: 20rem;
//   box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem #000000;
//   border-radius: 0.5rem;
// `;
