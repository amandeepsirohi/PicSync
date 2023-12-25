import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../Utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);
  return (
    <Flex gap={4} >
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={14}>
              {userProfile.username}
            </Text> 
          </Link>

          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(post.createdAt)}
        </Text>
        <Divider   mb={2} bg={"white"} />
      </Flex>
    </Flex>
  );
};

export default Caption;
