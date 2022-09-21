import React, { useEffect, useState } from "react";
import { Button } from "../styles/pages/Register";
import { Container, Forms, Input, Label, Title } from "../styles/pages/Register";
import { CreateNewCustomer } from "../services/RequestCustomer";
import { useNavigate } from "react-router-dom";
import {
  emailValidation,
  nameValidation,
  cpfValidaion,
  phoneNumberValidation,
} from "../helpers/Validations";
import ICustomer from "../interfaces/ICustomer";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validFullName, setValidFullName] = useState<boolean>(false);
  const [validCPF, setValidCPF] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [validPhoneNumber, setValidPhoneNumber] = useState<boolean>(false);
  const [validations, setValidations] = useState<boolean>(true);

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

  const validateFieldsForms = () => {
    const arrayValidations = [validFullName, validEmail, validCPF, validPhoneNumber];
    const isValidForms = arrayValidations.every((el) => el === true);
    // console.log(isValidForms);
    isValidForms && setValidations(!isValidForms);
    // console.log(validations);
  };

  useEffect(() => {
    validateFieldsForms();
  }, [validFullName, validEmail, validCPF, validPhoneNumber]);

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
          onChange={({ target }) => {
            setFullName(target.value);
            setValidFullName(nameValidation(target.value));
          }}
        />
      </Forms>
      <Forms>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="exemplo@email.com"
          onChange={({ target }) => {
            setEmail(target.value);
            setValidEmail(emailValidation(target.value));
          }}
        />
      </Forms>
      <Forms>
        <Label htmlFor="cpf">CPF:</Label>
        <Input
          type="text"
          name="cpf"
          placeholder="Ex.: 000.000.000-00, Digite apenas os números"
          onChange={({ target }) => {
            setCpf(target.value);
            setValidCPF(cpfValidaion(target.value));
          }}
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
          placeholder="Ex.: (99)9 9999-9999, Digite apenas números"
          onChange={({ target }) => {
            setPhoneNumber(target.value);
            setValidPhoneNumber(phoneNumberValidation(`+55${target.value}`));
          }}
        />
      </Forms>
      <Button
        disabled={validations}
        onClick={() => {
          registerNewCustomer(fullName, email, cpf, address, phoneNumber);
        }}
      >
        Criar
      </Button>
    </Container>
  );
}
