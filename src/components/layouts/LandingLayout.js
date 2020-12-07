import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Header from "../sections/Header";
import SideBar from "../sections/SideBar";
import Toolkit from "../sections/Toolkit";
import useWindowSize from "../../utils/useWindowSize";

export default function LandingLayout(props) {
  const size = useWindowSize();
  console.log("size", size);
  return (
    <Box
      h={size.height}
      w={size.width}
      direction="column"
      align="center"
      m="0 auto"
      {...props}
    >
      <Header />
      <Flex
        align="flex-start"
        // justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        h={`${size.height - 100}px`}
      >
        <SideBar />
        <Toolkit m={4} />
        <Flex
          //   p={8}
          maxW="20vh"
          minW="25%"
          bg="white"
          mt={4}
          mr={4}
          p={4}
          justifyContent="center"
          borderRadius="lg"
          boxShadow="lg"
          bg="purple.800"
          color="white"
        >
          <Text as="i">
            “We are what we repeatedly do. Excellence, then, is not an act, but
            a habit.”
          </Text>
        </Flex>
      </Flex>
      {props.children}
    </Box>
  );
}
