import { CardFooter, Link } from "@chakra-ui/react";
import { InstagramIcon, FacebookIcon, GitHubIcon, TwitterIcon } from "../icons";

function CardLinks() {
  return (
    <CardFooter
      display="flex"
      justifyContent="center"
      gap="24px;"
      bgColor="#161619"
      borderBottomRadius="10px"
    >
      <Link href="#">
        <InstagramIcon />
      </Link>
      <Link href="#">
        <GitHubIcon />
      </Link>
      <Link href="#">
        <FacebookIcon />
      </Link>
      <Link href="#">
        <TwitterIcon />
      </Link>
    </CardFooter>
  );
}

export default CardLinks;
