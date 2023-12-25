import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();
  return (
    <Container maxW={"container.sm"} mt={"94px"} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading &&
        posts?.length > 0 &&
        posts.map((post) => <FeedPost key={post._id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text textAlign={"center"} mt={"300px"} fontSize={"30px"} color={"red.500"}>
              You need some friends asap!!
          </Text>
          <Text textAlign={"center"}  color={"red.500"}>Stop coding and make some</Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
