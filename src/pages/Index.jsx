import React, { useState } from "react";
import { Box, Button, Collapse, IconButton, Input, InputGroup, InputRightElement, useDisclosure, VStack, Text, Image, Heading, Flex } from "@chakra-ui/react";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => setSearchValue(event.target.value);

  const handleSearchSubmit = () => {
    // TODO: Implement search functionality
    console.log("Search for: ", searchValue);
  };

  return (
    <Flex direction="column" align="center" p={4} bg="green.100">
      <Flex justify="space-between" width="full" p={4}>
        <IconButton icon={<FaBars />} variant="outline" onClick={onToggle} aria-label="Menu" />
        <Heading as="h1" size="xl" letterSpacing="tight">
          HikeFinder
        </Heading>
        <Button leftIcon={<FaUserCircle />} colorScheme="teal" variant="solid">
          Login with OAuth
        </Button>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box p={4} color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          <InputGroup size="md">
            <Input pr="4.5rem" type="text" placeholder="Search for trails" value={searchValue} onChange={handleSearchChange} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleSearchSubmit}>
                <FaSearch />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Collapse>

      <VStack spacing={8} mt={4}>
        <Text fontSize="2xl" color="gray.700">
          Welcome to HikeFinder
        </Text>
        <Image src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzEwMTE1MTU5fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="md" alt="Nature landscape" />
        <Box as="iframe" src="" width="100%" height="300px" bg="white" border="1px solid" borderColor="gray.300" />
      </VStack>
    </Flex>
  );
};

export default Index;
