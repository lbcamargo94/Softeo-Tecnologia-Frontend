import styled from "styled-components";

export const CardBox = styled.div`
  /* align-content: center; */
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem #000000;
  display: flex;
  flex-direction: row;
  height: 7.5rem;
  margin: 0.75rem;
  text-align: center;
  width: 20rem;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
`;

export const CustomerImage = styled.img`
  border-radius: 100%;
  border: none;
  height: 5rem;
  margin: 1rem;
  overflow: hidden;
  width: 30%;
`;

export const CustomerName = styled.h3`
  text-align: start;
  margin: 0.25rem;
`;

export const CustomerEmail = styled.p`
  text-align: start;
  margin: 0.25rem;
`;

export const CustomerCPF = styled.p`
  text-align: start;
  margin: 0.25rem;
`;
