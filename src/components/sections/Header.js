import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, CalendarIcon } from "@chakra-ui/icons";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      fontWeight="bold"
      letterSpacing="wide"
      fontSize="s"
      textAlign="left"
      color="gray.500"
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

export default function Header(props) {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  console.log("show", show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h="100px"
      p={4}
      borderBottomColor="gray.200"
      borderBottomWidth={1}
      bg={["purple.500", "purple.500", "white", "white"]}
      color={["white", "white", "purple.700", "purple.700"]}
      zIndex={5}
      {...props}
    >
      <CalendarIcon boxSize="2em" />

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/journal">Journal </MenuItems>
          <MenuItems to="/resources">Resources </MenuItems>
          <MenuItems to="/about">About </MenuItems>
          <MenuItems to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["purple.500", "purple.500", "white", "white"]}
              bg={["white", "white", "purple.500", "purple.500"]}
              _hover={{
                bg: ["purple.100", "purple.100", "purple.600", "purple.600"],
              }}
            >
              Create Account
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
}
