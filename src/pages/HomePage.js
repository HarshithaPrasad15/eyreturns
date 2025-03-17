import React from 'react'
import { VStack, Box, useBreakpointValue, Text, Heading, Button,  SimpleGrid, GridItem, Image, HStack,Flex} from '@chakra-ui/react'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import logo from "../assets/logo.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/signup');
    };
  

  return (
    <Box
      display="flex"
      justifyContent="Center"
      p={20}
      bg="gray.50"
      minH="100vh"
    >
      <VStack
        bg="var(--chakra-colors-blue-50)"
        width="800px"
        height="400px"
        p={4}
        borderRadius="md"
        justify="center"
        position="relative"
        

      >
       <Image 
      src={logo} 
      alt="Company Logo" 
      boxSize="180px" 
      objectFit="contain" 
      position="absolute" 
      top="2px"           
      left="20%"           
      transform="translateX(-50%)" 
      mt={-5}    
      />
       
       <ul style={{ listStyleType: "none", paddingLeft: 0, marginTop: "40px" }}>
      <li style={{ fontSize: "18px" }}>
      <HStack>
      <FaCheckCircle style={{ marginRight: "8px",color:"green" }} />
      <strong> AI-powered size recommendations</strong>
      </HStack> 
      </li>
      <li style={{ fontSize: "18px" }}>
      <HStack>
      <FaCheckCircle style={{ marginRight: "8px",color:"green"  }} />
        <strong> Virtual fitting room</strong></HStack>  </li>
      <li style={{ fontSize: "18px" }}>
      <HStack>
      <FaCheckCircle style={{ marginRight: "8px",color:"green"  }} />
        <strong> Perfect fit, every time Reduce returns & exchanges</strong></HStack>  </li>
      <li style={{ fontSize: "18px" }}>
      <HStack>
      <FaCheckCircle style={{ marginRight: "8px",color:"green"  }} />
        <strong> One-stop solution for all brands</strong></HStack>  </li>
      <li style={{ fontSize: "18px" }}>
      <HStack>
      <FaCheckCircle style={{ marginRight: "8px" ,color:"green" }} />
        <strong>  Easy & Simple to use </strong></HStack>  </li>
       </ul>
      </VStack>

      <VStack
        bg="white"
        width="800px"
        height="400px"
        p={4}
        borderRadius="md"
        justify="center"
      >
        <Box w="100%" maxW="400px">
        
          <Heading as="h1"
            size="4xl"
            mb={8}
            color="black"
            textAlign="center"
          >
            Login to your account
          </Heading>
          <SimpleGrid rowGap={3}>
            <GridItem >
              <FormControl>
              <FormLabel>Phone
              <span style={{ color: "red" }}> *</span>
              </FormLabel>
              <InputGroup marginTop={1}>
              <InputLeftAddon
             bg="gray.300"        
             color="gray.600"    
             borderColor="gray.300" 
             borderWidth="1px"
              children="+91"
            />
              <Input
              type="tel"
              placeholder="Enter your phone number"
              size="lg"
             focusBorderColor="gray.300"
             borderColor="gray.300"
             borderWidth="1px"
             variant="outline"
             width="360px"
            />
              </InputGroup>
              </FormControl>
            </GridItem>
            <GridItem>
              <Button
                bg="rgb(7, 173, 131)"
                size="lg"
                w="100%"
                mb={4}
              >
                Send OTP
              </Button>
            </GridItem>
            <Flex justifyContent="center" alignItems="center" mt={4}>
  <Text mr={1}>Don't have an account?</Text>
  <Button
    size="sm"
    bg="gray.300"
    color="black"
    _hover={{ bg: "gray.400" }}
    
    onClick={handleNavigation}
  >
    Create Account
  </Button>
</Flex>
          </SimpleGrid>
          
        
       </Box>
      </VStack>
  
      <Text
        position={isMobile ? "static" : "absolute"}
        bottom={4}
        left="50%"
        transform={isMobile ? "none" : "translateX(-50%)"}
        w="100%"
        textAlign="center"
        color="gray.500"
        p={4}
      >
        Copyright &copy; 2025
        <p> EY RETURNS SOLUTION PVT LTD.</p>
      </Text>
     </Box>
  );
}





export default HomePage;