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
      <Link
        href="#"
        _hover={{
          filter:
            "brightness(0) saturate(100%) invert(98%) sepia(53%) saturate(6846%) hue-rotate(296deg) brightness(108%) contrast(101%)",
        }}
      >
        <InstagramIcon />
      </Link>
      <Link href="3">
        <GitHubIcon />
      </Link>
      <Link href="3">
        <FacebookIcon />
      </Link>
      <Link href="3">
        <TwitterIcon />
      </Link>
    </CardFooter>
  );
}

export default CardLinks;
