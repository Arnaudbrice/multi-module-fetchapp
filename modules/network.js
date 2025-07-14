// fetching data from the api

export const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Error fetching data from the api");
    }
    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (error) {
    console.error(error);
  }
};
