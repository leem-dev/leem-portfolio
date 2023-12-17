import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="x1" src="https://i.pravatar.cc/150?img=7" alt="Avatar" />
      <Heading as="h3" size="x1" fontWeight="400">
        {greeting}
      </Heading>
      <Heading as="h1" size="2xl" fontWeight="bold">
        {bio1}
      </Heading>
      <Heading as="h1" size="2xl" fontWeight="bold">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
