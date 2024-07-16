export const AppRoutes = {
  about: "/about",
  cart: "/cart",
  shop: "/shop",
  blog: "/blog",
  adminCreate: "/admin/create",
  robotWithId: (id: string | number) => `/shop/${id}`,
};
