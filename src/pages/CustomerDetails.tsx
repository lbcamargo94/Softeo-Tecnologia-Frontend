import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IPurchase from "../interfaces/IPurchase";
import { GetPurchase } from "../services/RequestPurchase";
import {
  BoxCardsList,
  BoxContracts,
  BoxProfile,
  ButtonCreate,
  ButtonDelet,
  ButtonEdit,
  Container,
  Title,
} from "../styles/pages/CustomerDetails";

export default function CustomerDetails() {
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  console.log(purchases);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function requestCustomer() {
      setLoading(false);
      const resultCustomer = await GetPurchase(`/customer/${id}`);
      setPurchases(resultCustomer);
      setLoading(true);
    }
    requestCustomer();
  }, []);

  return (
    <Container>
      <BoxProfile>
        <Title>Profile</Title>
        <ButtonEdit>Editar</ButtonEdit>
        <ButtonDelet>Excluir</ButtonDelet>
      </BoxProfile>
      <BoxContracts>
        <Title>Crontratos</Title>
        <ButtonCreate>Novo Contrato</ButtonCreate>
      </BoxContracts>
      <BoxCardsList>{}</BoxCardsList>
    </Container>
  );
}
