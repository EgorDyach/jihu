import Breadcrumb from "@components/Breadcrumb";
import ContentLoader from "@components/ContentLoader";
import Flex from "@components/Flex";
import Image from "@components/Image";
import { Header, ItemTitle } from "@components/Typography";
import { requestFullPost } from "@lib/api/posts";
import { formatDate, FULL_DATE_FORMAT } from "@lib/utils/formatDate";
import PageNotFound from "@modules/pageNotFound/PageNotFound";
import { Post } from "@type/posts";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

export const postPath = "/posts/:postId";

const PostImage = styled(Image)`
  margin: 0 auto;
`;

export const PostPage = () => {
  const { postId = "" } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isRobotLoading, setIsRobotLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setIsRobotLoading(true);
      try {
        const response = await requestFullPost(postId);
        setPost(response);
      } catch (error) {
        toast("❌ Не удалось получить информацию о роботе!");
      } finally {
        setIsRobotLoading(false);
      }
    })();
  }, [postId]);

  if (isRobotLoading) return <ContentLoader />;
  if (!post) return <PageNotFound />;

  return (
    <>
      <Breadcrumb
        items={[
          {
            path: "/posts",
            title: "Материалы и посты",
          },
          {
            title: post.name,
          },
        ]}
      />
      <Header $top="large">{post.name}</Header>
      {post.photo_link && (
        <PostImage $top="medium" src={post.photo_link} $maxWidth="900px" />
      )}
      <Flex $top="medium">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.description }}
        ></div>
      </Flex>
      <Flex justify="end">
        <ItemTitle>
          {formatDate(post.date_published, FULL_DATE_FORMAT)}
        </ItemTitle>
      </Flex>
    </>
  );
};
