export const AppRoutes = {
  about: "/about",
  cart: "/cart",
  shop: "/shop",
  blog: "/blog",
  admin: "/admin",
  robotWithId: (id: string | number) => `/shop/${id}`,
};
