import Button from "@components/Button/Button";
import Flex from "@components/Flex";
import PenIcon from "@components/icons/PenIcon";
import TrashIcon from "@components/icons/TrashIcon";
import Image from "@components/Image";
import { ItemTitle, Paragraph, Text } from "@components/Typography";
import { AppRoutes } from "@lib/configs/routes";
import { indent } from "@lib/theme/sizes";
import { formatDate, FULL_DATE_FORMAT } from "@lib/utils/formatDate";
import { isAdmin } from "@lib/utils/isAdmin";
import { Post } from "@type/posts";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface PostsCardProps {
  post: Post;
  removePost: (id: string | number) => void;
}

const StyledCard = styled(Flex)`
  padding: ${indent.large};
  border-radius: 10px;
  background-color: #fff;
  max-width: 700px;
  width: 100%;
  cursor: ${isAdmin() ? "default" : "pointer"};
  position: relative;
  z-index: 1;
`;

const StyledDescription = styled(Paragraph)`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledTitle = styled(ItemTitle)`
  cursor: pointer;
`;

export const PostsCard: FC<PostsCardProps> = ({ post, removePost }) => {
  const navigate = useNavigate();

  return (
    <StyledCard
      onClick={() => {
        if (!isAdmin()) navigate(AppRoutes.postWithId(post.id));
      }}
      direction="column"
      align="start"
    >
      <Text $size="small" $color="secondary">
        {formatDate(post.date_published, FULL_DATE_FORMAT)}
      </Text>
      <StyledTitle
        onClick={() => navigate(AppRoutes.postWithId(post.id))}
        $top="small"
      >
        {post.name}
      </StyledTitle>
      {post.photo_link && <Image $top="small" src={post.photo_link} />}
      {!post.photo_link && (
        <StyledDescription>
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
        </StyledDescription>
      )}

      {isAdmin() && (
        <Flex $top="medium" gap="16px">
          <Button
            type="default"
            onClick={() => navigate(AppRoutes.editPost(post.id))}
          >
            <Flex gap="8px">
              <PenIcon size={14} />
              <Paragraph>Редактировать</Paragraph>
            </Flex>
          </Button>

          <Button type="danger" onClick={() => removePost(post.id)}>
            <Flex gap="8px">
              <TrashIcon style={{ transform: "rotate(0deg)" }} size={14} />
              <Paragraph>Удалить</Paragraph>
            </Flex>
          </Button>
        </Flex>
      )}
    </StyledCard>
  );
};
