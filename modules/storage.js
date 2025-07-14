export const getCartItems = () =>
  JSON.parse(localStorage.getItem("cart")) || [];

export const setCartItems = data =>
  localStorage.setItem("cart", JSON.stringify(data));
