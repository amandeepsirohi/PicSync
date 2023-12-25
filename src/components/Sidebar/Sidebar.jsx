import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
} from "../../Assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  
  const { handleLogout, isLoggingOut } = useLogout();
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}>
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        <Link
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer">
          <InstagramLogo />
        </Link>
        <Link
          as={RouterLink}
          p={2}
          display={{ base: "display", md: "none" }}
          cursor="pointer"
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}>
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems/>
        </Flex>

        {/* Logout */}

        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}>
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            borderRadius={6}
            p={2}
            mt={"auto"}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            _hover={{ bg: "whiteAlpha.400" }}>
            <BiLogOut size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading = {isLoggingOut}>
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
