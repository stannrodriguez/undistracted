import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  CheckIcon,
  SmallAddIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { AiOutlineFileAdd } from "react-icons/ai";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const tasks = [
  { title: "Cancel MasterClass pass", isDone: true },
  { title: "Get refund for another learning tutorial", isDone: true },
  { title: "Interview prep", isDone: false },
  { title: "Look over resume", isDone: false },
  { title: "Build website for photography business", isDone: true },
];

const TaskCard = (props) => {
  const { task } = props;
  return (
    <Flex direction="row">
      <Box w="90%" pr={2}>
        <Text
          fontWeight="bold"
          letterSpacing="wide"
          fontSize="xs"
          align="left"
          color="gray.700"
          decoration={task.isDone ? "line-through" : null}
        >
          {task.title}
        </Text>
        <Text fontSize="xs" textAlign="left" color="gray.500">
          Due today
        </Text>
      </Box>

      {!task.isDone && (
        <Tooltip label="Mark as Complete" fontSize="md">
          <CheckIcon w="10%" />
        </Tooltip>
      )}
    </Flex>
  );
};

export default function SideBar(props) {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  console.log("show", show);

  return (
    <Flex
      as="nav"
      align="flex-start"
      direction="column"
      justify="space-between"
      h="100%"
      w="15%"
      minW="20vh"
      p={4}
      boxShadow="lg"
      bg={["purple.500", "purple.500", "white", "white"]}
      color={["white", "white", "purple.700", "purple.700"]}
      zIndex={1}
      {...props}
    >
      <Box>
        <EditIcon />
        <Text as="b" ml={2} letterSpacing="wide">
          Quick Add
        </Text>
      </Box>
      <Box
        mt={4}
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
      >
        Today's tasks
      </Box>
      <VStack mt={4} align="flex-start" spacing={4}>
        {tasks
          .filter((task) => !task.isDone)
          .map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        {tasks
          .filter((task) => task.isDone)
          .map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
      </VStack>
      <Spacer />
    </Flex>
  );
}
