import React, { useState } from "react";
import { Button } from "../styles/pages/Register";
import { Container, Forms, Input, Label, Title } from "../styles/pages/Register";
import { CreateNewCustomer } from "../services/RequestCustomer";
import { useNavigate } from "react-router-dom";
import ICustomer from "../interfaces/ICustomer";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const registerNewCustomer = async (
    fullName: string,
    email: string,
    cpf: string,
    address: string,
    phoneNumber: string,
  ) => {
    const newCustomer: ICustomer = {
      fullName,
      email,
      cpf,
      phoneNumber,
      address,
    };
    await CreateNewCustomer("/register", newCustomer);
    navigate("/");
  };

  return (
    <Container>
      <Title>Formulário de cadastro para um novo cliente</Title>
      <Forms action="">
        <Label htmlFor="fullName">Nome Completo:</Label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Digite o nome e sobrenome"
          onChange={({ target }) => setFullName(target.value)}
        />
      </Forms>
      <Forms>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="exemplo@email.com"
          onChange={({ target }) => setEmail(target.value)}
        />
      </Forms>
      <Forms>
        <Label htmlFor="cpf">CPF:</Label>
        <Input
          type="text"
          name="cpf"
          placeholder="00000000000"
          onChange={({ target }) => setCpf(target.value)}
        />
      </Forms>
      <Forms>
        <Label htmlFor="address">Endereço:</Label>
        <Input
          type="text"
          name="address"
          placeholder="Digite o enderaço"
          onChange={({ target }) => setAddress(target.value)}
        />
      </Forms>
      <Forms>
        <Label htmlFor="phoneNumber">Telefone de Contato:</Label>
        <Input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="+55XXXXXXXXXXX"
          onChange={({ target }) => setPhoneNumber(target.value)}
        />
      </Forms>
      <Button onClick={() => registerNewCustomer(fullName, email, cpf, address, phoneNumber)}>
        Criar
      </Button>
    </Container>
  );
}
