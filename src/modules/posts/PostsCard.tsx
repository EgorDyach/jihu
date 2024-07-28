import Flex from "@components/Flex";
import Image from "@components/Image";
import { ItemTitle, Paragraph, Text } from "@components/Typography";
import { AppRoutes } from "@lib/configs/routes";
import { indent } from "@lib/theme/sizes";
import { formatDate, FULL_DATE_FORMAT } from "@lib/utils/formatDate";
import { Post } from "@type/posts";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface PostsCardProps {
  post: Post;
}

const StyledCard = styled(Flex)`
  padding: ${indent.large};
  border-radius: 10px;
  background-color: #fff;
  max-width: 700px;
  width: 100%;
  cursor: pointer;
`;

const StyledDescription = styled(Paragraph)`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PostsCard: FC<PostsCardProps> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <StyledCard
      onClick={() => navigate(AppRoutes.postWithId(post.id))}
      direction="column"
      align="start"
    >
      <Text $size="small" $color="secondary">
        {formatDate(post.date_published, FULL_DATE_FORMAT)}
      </Text>
      <ItemTitle $top="small">{post.name}</ItemTitle>
      {post.photo_link && <Image $top="small" src={post.photo_link} />}
      {!post.photo_link && (
        <StyledDescription>{post.description}</StyledDescription>
      )}
    </StyledCard>
  );
};
