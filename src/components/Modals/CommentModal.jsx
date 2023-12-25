import { useEffect, useRef } from "react";
import usePostComment from "../../hooks/usePostComment";
import Comment from "../Comment/Comment";

import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const CommentsModal = ({ isOpen, onClose, post }) => {
  const commentsContainerRef = useRef(null);
  const { handlePostComment, isCommenting } = usePostComment();
  const commentRef = useRef(null);
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    await handlePostComment(post.id, commentRef.current.value);
    commentRef.current.value = "";
  };
  useEffect(() => {
    const scrollToBottom = () =>{
        commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight;
    }
    if(isOpen)
    {
        setTimeout(() => {
            scrollToBottom();
        },100)
    }
  },[isOpen , post.comments.length])
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
        <ModalHeader>Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex
            mb={4}
            gap={4}
            flexDir={"column"}
            maxH={"250px"}
            overflowY={"auto"}
            ref={commentsContainerRef}>
            {post.comments.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))}
          </Flex>
          <form onSubmit={handleSubmitComment} style={{ marginTop: "2rem" }}>
            <Input placeholder="Comment" size={"sm"} ref={commentRef} />
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button
                isLoading={isCommenting}
                type="submit"
                ml={"auto"}
                size={"sm"}
                my={4}>
                Post
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CommentsModal;
