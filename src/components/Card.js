import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  

  return (
    <VStack
      spacing="2"
      borderRadius="lg"
      maxW="md"
      boxShadow="base"
      align="start"
      background="white"
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" />
      <VStack align="start" spacing="2" p="2">
        <Heading as="h3" fontSize="17px" fontWeight="bold" color="black">
          {title}
        </Heading>
        <Text color="black" fontWeight="400" fontSize="12px">
          {description}
        </Text>
      </VStack>
      <HStack spacing="2" p="2" alignItems="center">
        <Text fontWeight="bold" color="black" fontSize="13px">
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} width="10px" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
