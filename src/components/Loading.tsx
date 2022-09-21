import React from "react";
import Logo from "../components/Logo";
import { Box, BoxLoad, Text } from "../styles/components/Loading";

export default function Loading() {
  return (
    <BoxLoad>
      <Box>
        <Logo />
      </Box>
      <Text>Carregando...</Text>
    </BoxLoad>
  );
}
