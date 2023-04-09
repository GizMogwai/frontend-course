import {
  CardHeader,
  Image,
  Heading,
  Box,
  Link,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { EmailIcon, LinkedinIcon } from "../icons";
import gm from "/src/images/gm.png";

function CardInfo() {
  return (
    <CardHeader p="0">
      <Image src={gm} borderTopRadius="10px" />
      <Box p="15px" textAlign="center">
        <Heading as="h1" color="#FFFFFF" fontSize="25px">
          Gizmo
        </Heading>
        <Heading as="h3" color="#F3BF99" fontSize="12px" fontWeight="400">
          Mogwai Developer
        </Heading>
        <Link href="https://gizmo.dev" fontSize="10px" color="#F5F5F5">
          Gizmo.dev
        </Link>
      </Box>
      <Box>
        <ButtonGroup display="flex" justifyContent="center" spacing="5">
          <Button width="115px" colorScheme="gray" leftIcon={<EmailIcon />}>
            Email
          </Button>
          <Button width="115px" bgColor="#5093E2" leftIcon={<LinkedinIcon />}>
            LinkedIn
          </Button>
        </ButtonGroup>
      </Box>
    </CardHeader>
  );
}

export default CardInfo;
