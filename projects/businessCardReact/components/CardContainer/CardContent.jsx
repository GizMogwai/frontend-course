import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CardBody,
  Heading,
  Box,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function CardContent() {
  return (
    <CardBody>
      <Accordion allowToggle color="#FFF">
        <AccordionItem>
          <Heading as="h2">
            <AccordionButton>
              <Box fontWeight="700" as="span" flex="1" textAlign="left">
                About
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text as="p">
              A small Mogwai just livin' life. I'm traditionally a Product
              Manager, but i'm exploring other options for my life. Development
              interests me greatly.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h2">
            <AccordionButton>
              <Box fontWeight="700" as="span" flex="1" textAlign="left">
                Interests
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Web3</ListItem>
              <ListItem>Problem solving</ListItem>
              <ListItem>Video games</ListItem>
              <ListItem>Learning new skills</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </CardBody>
  );
}

export default CardContent;
