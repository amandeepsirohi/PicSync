import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  const image2 =
    'url("https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png")';
  const image1 =
    'url("https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png")';

  const [image, setImage] = useState(image1);
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} mt={8} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/*Left Side*/}
          <Box display={{ base: "none", md: "block" }} mt={-9}>
            <Image src="/main.png" h={650} alt="Phone Image" />
            <Image
              mt={-624}
              ml={147}
              h={552}
              style={{ content: image }}
              onMouseEnter={() => {
                setImage(image2);
              }}
              onMouseOut={() => setImage(image1)}
              alt="Phone Image"
              _hover={{
                shadow: "md",
                transform: "translateY(-2px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "top ease 0.1s",
              }}
              // transition={"0.2s ease-in-out"}
            />
          </Box>
          {/* Right side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="pl logo" />
              <Image src="/microsoft.png" h={"10"} alt="pl logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
      
    </Flex>
  );
};

export default AuthPage;
