export const capitalize = (str) => (
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`
);

export const toRoute = (page) => (
  `/${page}`
);
