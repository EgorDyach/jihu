import { Post } from "@type/posts";
import axios from "axios";

export const requestPosts = async (): Promise<Post[]> => {
  return (await axios.get("https://trade-shop.onrender.com/blog/list/items"))
    .data.detail;
};

export const requestFullPost = async (
  postId: string | number,
): Promise<Post> => {
  return (
    await axios.get(`https://trade-shop.onrender.com/blog/item/${postId}`)
  ).data.detail[0];
};
