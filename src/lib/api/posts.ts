import { PostsFormPayload } from "@modules/postForms/types";
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

export const requestCreatePost = async (
  robotPayload: PostsFormPayload,
): Promise<void> => {
  console.log(robotPayload);
  const list = [];
  const formData = new FormData();
  if (robotPayload.photos) {
    list.push(robotPayload.photos);
  }
  list.forEach((item) => {
    formData.append("photos", item);
    // formData.append("photos", [item]);
    // formData.append("photos", item);
  });

  formData.append(
    "request",
    JSON.stringify({
      name: robotPayload.name,
      description: robotPayload.description,
      token: String(localStorage.getItem("accessJihu")),
    }),
  );
  return await axios.post(
    "https://trade-shop.onrender.com/blog/new_item",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
};

export const requestEditRobot = async (
  robotPayload: PostsFormPayload,
  id: string | number,
): Promise<void> => {
  const formData = new FormData();
  if (robotPayload.photos) {
    formData.append("photo", robotPayload.photos);
  } else {
    formData.append("photo", new Blob());
  }

  formData.append(
    "request",
    JSON.stringify({
      name: robotPayload.name,
      description: robotPayload.description,
      token: String(localStorage.getItem("accessJihu")),
    }),
  );
  return await axios.put(
    `https://trade-shop.onrender.com/update/blog/item/${id}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
};
