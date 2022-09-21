import styled from "styled-components";
import { keyframes } from "styled-components";

const flipAnimation = keyframes`
  0% {transform: rotate(0)}
  50% {transform: rotateY(180deg)}
  100% {transform: rotateY(180deg) rotateX(180deg)}
`;

export const BoxLoad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${flipAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export const Text = styled.h3`
  color: black;
`;
