import React, { useEffect, useState } from "react";
import CustomerCard from "../components/CustomerCard";
import ICustomer from "../interfaces/ICustomer";
import Loading from "../components/Loading";
import { GetCustomer } from "../services/RequestCustomer";
import { useNavigate } from "react-router-dom";
import { Box, BoxCards, Button, Container, Text } from "../styles/pages/HomePage";

export default function HomePage() {
  const navigate = useNavigate();

  const [customers, useCustomers] = useState<ICustomer[]>([]);
  console.log(customers);

  const [loading, useLoading] = useState<boolean>(false);
  console.log(loading);

  useEffect(() => {
    async function requestCustomer() {
      useLoading(false);
      const resultCustomer = await GetCustomer("/");
      useCustomers(resultCustomer);
      useLoading(true);
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
        {loading === false ? (
          <Loading />
        ) : (
          customers.map((el) => <CustomerCard key={el.id} {...el} />)
        )}
      </BoxCards>
    </Container>
  );
}
