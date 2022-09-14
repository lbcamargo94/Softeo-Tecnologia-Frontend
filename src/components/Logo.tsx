import React from "react";
import styled from "styled-components";
import LogoImage from "../assets/images/logo.png";

export default function Logo() {
  return (
    <Box>
      <Image alt="LogoImage" src={LogoImage} />
    </Box>
  );
}

const Box = styled.div`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 100%;
  margin: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: none;
  border-radius: 100%;
`;
