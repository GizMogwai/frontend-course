import * as React from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      display="flex"
      minH="100%"
      minw="100%"
      bgGradient="linear(to-r, #ffafbd, #ffc3a0)"
    >
      <CardContainer />
    </Box>
  );
}

export default App;
