import { Box, Heading, VStack, Input, Stack ,Radio, RadioGroup} from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [gender, setGender] = useState("male");
  return (
    <Box
      maxW="lg"
      mx="auto"
      mt="8"
      p="6"
      h="680px"
       w="800px" 
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Stack spacing={4} align="center">
        <Heading size="lg">Create your account</Heading>
      </Stack>
      <VStack spacing={4} align="stretch">
          <Input placeholder="Full Name" size="lg" />
          <Input placeholder="Email Address" size="lg" type="email" />
          <Input placeholder="Phone Number" size="lg" type="tel" />
          <Input placeholder="Password" size="lg" type="password" />
          <Input placeholder="Confirm Password" size="lg" type="password" />
          <RadioGroup onChange={setGender} value={gender}>
          <Stack direction="row" spacing={4}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Stack>
        </RadioGroup>
          
          </VStack>
    </Box>
  );
};

export default Signup;
