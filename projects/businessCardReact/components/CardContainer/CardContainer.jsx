import { Card } from "@chakra-ui/react";
import CardInfo from "./CardInfo";
import CardLinks from "./CardLinks";
import CardContent from "./CardContent";

function CardContainer() {
  return (
    <Card maxW="400px" boxShadow="dark-lg" margin="auto" bgColor="#1A1B21">
      <CardInfo />
      <CardContent />
      <CardLinks />
    </Card>
  );
}

export default CardContainer;
