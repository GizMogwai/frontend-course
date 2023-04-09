// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: "50%",
        width: "150px",
      },
    },
    AccordionItem: {
      baseStyle: {
        bgColor: "#FFF",
      },
    },
  },
});

export default theme;
