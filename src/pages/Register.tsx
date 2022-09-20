import React from "react";
import { Button } from "../styles/pages/Register";
import { Container, Forms, Input, Label, Title } from "../styles/pages/Register";

export default function Register() {
  return (
    <Container>
      <Title>Formulário de cadastro para um novo cliente</Title>
      <Forms action="">
        <Label htmlFor="fullName">Nome Completo:</Label>
        <Input type="text" id="fullName" name="fullName" placeholder="Digite o nome e sobrenome" />
      </Forms>
      <Forms>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" placeholder="exemplo@email.com" />
      </Forms>
      <Forms>
        <Label htmlFor="cpf">CPF:</Label>
        <Input type="text" name="cpf" placeholder="000.000.000-00" />
      </Forms>
      <Forms>
        <Label htmlFor="address">Endereço:</Label>
        <Input type="text" name="address" placeholder="Digite o enderaço" />
      </Forms>
      <Forms>
        <Label htmlFor="phoneNumber">Telefone de Contato:</Label>
        <Input type="text" id="phoneNumber" name="phoneNumber" placeholder="(XX) X XXXX-XXXX" />
      </Forms>
      <Button>Criar</Button>
    </Container>
  );
}
