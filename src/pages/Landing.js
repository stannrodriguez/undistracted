import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Badge,
  VStack,
  Spacer,
  Stack,
  Button,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Lorem,
  ModalCloseButton,
  useDisclosure,
  Modal,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Center,
  HStack,
  Divider,
  ListItem,
  UnorderedList,
  AddIcon,
  IconButton,
  Flex,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/react";
import LandingLayout from "../components/layouts/LandingLayout";

function SignUpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();

  return (
    <>
      <Button colorScheme="purple" onClick={onOpen}>
        Sign Up
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function ToolModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const initialTime = 20 * 60; //20 mins
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <>
      <Button onClick={onOpen}>Timer</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Timer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text as="i">
              Motivation: Distractions come and go. Immerse yourself in your
              work and see if you're still tempted after 10 minutes.
            </Text>
            <Center my={4}>
              <Heading>{`${Math.floor(timer / 60)} : ${(
                "0" + Math.floor(timer % 60)
              ).slice(-2)}`}</Heading>
            </Center>
            <Center>
              <Button onClick={toggle} colorScheme="purple">
                {isActive ? "Pause" : "Start Timer"}
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function DistractionList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const [distractions, setDistractions] = useState([]);
  const [input, setInput] = useState("");
  const handleChange = (event) => setInput(event.target.value);

  return (
    <>
      <Button onClick={onOpen}>Lister</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lister</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text as="i">
              Motivation: Distractions inevitably pop up. Focus on your work and
              write down your distractions so you're more mindful and less
              likely to succumb to them.
            </Text>

            <Box mt={4}>
              <Text as="b">List of Distractions</Text>
              <UnorderedList mt={4}>
                {distractions.map((d) => (
                  <ListItem mb={2} key={d}>
                    {d}
                  </ListItem>
                ))}
              </UnorderedList>
              <Input
                value={input}
                onChange={handleChange}
                placeholder="What is distracting you?"
                size="sm"
              />
              <Button
                mt={4}
                onClick={() => setDistractions([...distractions, input])}
                colorScheme="purple"
              >
                Add
              </Button>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function Planner() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Button onClick={onOpen}>Planner</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Planner</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text as="i">
              Motivation: Distractions are prompted by internal triggers as a
              way of escaping discomfort. Find the root source of your
              discomfort and address it instead of turning to distractions.
            </Text>

            <Box mt={4}>
              <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                  <Tab>Step One</Tab>
                  <Tab>Step Two</Tab>
                  <Tab>Step Three</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>What is the source of your discomfort?</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Explore how you feel</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Decide what to do</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </ModalBody>

          <ModalFooter>
            {tabIndex < 2 ? (
              <Button onClick={() => setTabIndex(tabIndex + 1)}>Next</Button>
            ) : (
              <>
                <p>Was this helpful?</p>
                <HStack ml={2}>
                  <Button>Yes</Button>
                  <Button>No</Button>
                </HStack>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const ToolCard = ({ tool }) => {
  return (
    <Box bg="gray.100" height="100px" width="100%" borderRadius="md">
      {/* <Box
        bg="purple.800"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100px"
        zIndex={10}
      >
        <Text as="b" color="white">
          {tool.title}
        </Text>
      </Box> */}
      <VStack m={2} align="stretch">
        <Text fontWeight="semibold">{tool.title}</Text>
        <Text as="i" fontSize="xs" noOfLines={4}>
          {tool.desc}
        </Text>
      </VStack>
      <Box
        mx={4}
        // height="20px"
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textAlign="right"
      >
        <ToolModal />
        <DistractionList />
        <Planner />
      </Box>
    </Box>
  );
};

const tools = [
  {
    title: "Timer",
    desc: "Postpone your distractions and get started on your work",
    imgUrl: "http://dummyimage.com/177x227.jpg/dddddd/000000",
    color: "#33599d",
    helpfulStatus: true,
  },
  {
    title: "Planner",
    desc: "Make a plan to prevent yourself from getting distracted",
    imgUrl: "http://dummyimage.com/177x227.jpg/dddddd/000000",
    color: "#33599d",
    helpfulStatus: true,
  },
  {
    title: "List It Out",
    desc: "Take note of the distractions in your way while you work",
    imgUrl: "http://dummyimage.com/177x227.jpg/dddddd/000000",
    color: "#33599d",
    helpfulStatus: true,
  },
];

function Landing() {
  return <LandingLayout></LandingLayout>;
}

export default Landing;
