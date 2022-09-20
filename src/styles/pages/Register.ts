import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 1rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 1rem;
  margin-bottom: 5rem;
`;

export const Forms = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 3.5rem;
  max-width: 25rem;
  width: 100%;
  padding: 1rem;
`;

export const Label = styled.label`
  padding: 0 0.25rem;
  margin: -0.5rem 1rem;
  position: absolute;
  float: -1rem;
  box-sizing: border-box;
`;

export const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  text-indent: 1rem;
`;

export const Button = styled.button`
  box-shadow: 0.125rem 0.125rem 0rem 0rem #000000;
  align-items: center;
  background-color: #2cc0d3;
  border-radius: 0.25rem;
  border: 1px outset;
  color: #ffffff;
  display: flex;
  font-size: 16px;
  height: 2.5rem;
  justify-content: center;
  margin: 1rem;
  padding: 0.5rem;
  text-align: center;
  width: 7.5rem;
  cursor: pointer;
`;
