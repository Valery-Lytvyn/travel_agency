export const ROUTES = {
  index: "/",
  offers: "/offers",
  services: "/services",
  gallery: "/gallery",
  reviews: "/reviews",
  search: (value: string | null): string => {
    return value ? `/search/${value}` : "/search/:value";
  },
  login: "/login",
};
