import React, { useEffect, useState } from "react";
import CustomerCard from "../components/CustomerCard";
import ICustomer from "../interfaces/ICustomer";
import Loading from "../components/Loading";
import { GetCustomer } from "../services/RequestCustomer";
import { useNavigate } from "react-router-dom";
import { Box, BoxCards, Button, Container, Text } from "../styles/pages/HomePage";

export default function HomePage() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function requestCustomer() {
      setLoading(false);
      const resultCustomer = await GetCustomer("/");
      setCustomers(resultCustomer);
      setLoading(true);
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
