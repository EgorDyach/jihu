import Button from "@components/Button/Button";
import ContentLoader from "@components/ContentLoader";
import Flex from "@components/Flex";
import { Header } from "@components/Typography";
import { requestPosts, requestRemovePost } from "@lib/api/posts";
import { AppRoutes } from "@lib/configs/routes";
import { isAdmin } from "@lib/utils/isAdmin";
import { PaginationQueryParams } from "@type/common";
import { Post } from "@type/posts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PostsCard } from "./PostsCard";

export const postsPath = "/posts/";

export const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [arePostsLoading, setArePostsLoading] = useState(false);
  const [pagination, setPagination] = useState<PaginationQueryParams>({
    limit: 4,
    offset: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setArePostsLoading(true);
      try {
        const fetchedPosts = await requestPosts();
        setAllPosts(fetchedPosts);
      } catch (error) {
        toast("Ошибка при получении информации о постах");
      }
      setArePostsLoading(false);
    })();
  }, []);

  const removePost = async (id: string | number) => {
    try {
      await requestRemovePost(id);
      toast("✅ Пост успешно удален!");
      setAllPosts(allPosts.filter((post) => post.id !== id));
    } catch {
      toast("❌ Не удалось удалить пост!");
    }
  };

  useEffect(() => {
    setPosts([...allPosts.slice(0, pagination.offset + pagination.limit)]);
  }, [allPosts, pagination.offset, pagination.limit]);

  if (arePostsLoading) return <ContentLoader />;

  return (
    <>
      <Flex justify="space-between">
        <Header>Материалы и посты</Header>
        {isAdmin() && (
          <Button onClick={() => navigate(AppRoutes.postCreate)}>
            Новый пост
          </Button>
        )}
      </Flex>
      <Flex $top="large" direction="column" align="center" gap="16px">
        {posts.map((post) => (
          <PostsCard removePost={removePost} key={post.id} post={post} />
        ))}
        <Button
          disabled={posts.length >= allPosts.length}
          onClick={() =>
            setPagination({
              offset: pagination.offset + pagination.limit,
              limit: pagination.limit,
            })
          }
        >
          Загрузить ещё
        </Button>
      </Flex>
    </>
  );
};
