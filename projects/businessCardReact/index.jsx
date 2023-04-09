import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        width: "150px",
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          filter:
            "brightness(0) saturate(100%) invert(98%) sepia(53%) saturate(6846%) hue-rotate(296deg) brightness(108%) contrast(101%)",
        },
      },
    },
  },
});

export default theme;

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
