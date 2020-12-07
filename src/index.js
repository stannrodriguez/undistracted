import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "purple.100",
      200: "purple.200",
      300: "purple.300",
      400: "purple.400",
      500: "purple.500",
      600: "purple.600",
      700: "purple.700",
      800: "purple.800",
      900: "purple.900",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.100",
      },
      // styles for the `a`
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
