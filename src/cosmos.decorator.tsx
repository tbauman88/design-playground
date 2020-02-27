import { CSSReset, Flex, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import "typeface-raleway";
import { baseTheme } from "./baseTheme";
require("typeface-raleway");

const decorator: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CSSReset />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        rel="stylesheet"
      ></link>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        position="relative"
      >
        {children}
      </Flex>
    </ThemeProvider>
  );
};

export default decorator;
