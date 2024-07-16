export const AppRoutes = {
  about: "/about",
  cart: "/cart",
  shop: "/shop",
  blog: "/blog",
  adminCreate: "/shop/create",
  robotWithId: (id: string | number) => `/shop/${id}`,
  editRobot: (id: string | number) => `/shop/${id}/edit`,
};
