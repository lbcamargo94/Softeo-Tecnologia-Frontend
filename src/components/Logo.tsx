import React from "react";
import { Box, Image } from "../styles/components/Logo";
import LogoImage from "../assets/images/logo.png";

export default function Logo() {
  return (
    <Box>
      <Image alt="LogoImage" src={LogoImage} />
    </Box>
  );
}
