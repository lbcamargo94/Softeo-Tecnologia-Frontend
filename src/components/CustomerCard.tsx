import React from "react";
import ICustomer from "../interfaces/ICustomer";
import { useNavigate } from "react-router-dom";
import {
  CardBody,
  CardBox,
  CustomerCPF,
  CustomerEmail,
  CustomerImage,
  CustomerName,
} from "../styles/components/CustomerCard";
import profileImage from "../assets/images/profile_image.png";

export default function CustomerCard({ id, fullName, email, cpf }: ICustomer) {
  let navigate = useNavigate();

  return (
    <CardBox onClick={() => navigate(`/customer/${id}`)}>
      <CustomerImage src={profileImage} alt="profile_image" />
      <CardBody>
        <CustomerName>{fullName}</CustomerName>
        <CustomerEmail>Email: {email}</CustomerEmail>
        <CustomerCPF>CPF: {cpf}</CustomerCPF>
      </CardBody>
    </CardBox>
  );
}
