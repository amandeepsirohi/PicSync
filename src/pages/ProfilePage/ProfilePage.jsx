import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import { Link, useParams } from "react-router-dom";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);
  if (!isLoading && !userProfile) {
    return <UserNotFound />;
  }
  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}>
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}>
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}>
      <SkeletonCircle size="24" />
      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}>
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="150px" />
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return <Flex>
    <Box>
    <Image src="../../../public/error1.png" alt="image error" w={"660px"}  py={"200px"}  mx={"auto"} ml={"500px"} boxShadow='dark-lg' />
    </Box>
    <Link>Go Back</Link>
  </Flex>;
};
