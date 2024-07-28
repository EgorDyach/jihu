export const AppRoutes = {
  about: "/about",
  cart: "/cart",
  shop: "/shop",
  posts: "/posts",
  postWithId: (id: string | number) => `/posts/${id}`,
  adminCreate: "/shop/create",
  robotWithId: (id: string | number) => `/shop/${id}`,
  editRobot: (id: string | number) => `/shop/${id}/edit`,
};
