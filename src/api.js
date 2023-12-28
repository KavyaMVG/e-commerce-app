import axios from "axios";

export const getProductsList = async () => {
  console.log(process.env.REACT_APP_RAPID_API_KEY);
  try {
    const response = await axios.get(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      {
        params: {
          country: "us",
          lang: "en",
          sortBy: "newProduct",
          concepts: "MODERN CLASSIC",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getManProductsList = async () => {
  try {
    const response = await axios.get(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      {
        params: {
          country: "us",
          lang: "en",
          categories: "men_all",
          concepts: ["H&M MAN"],
          sortBy: "newProduct",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHomeProductsList = async () => {
  try {
    const response = await axios.get(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      {
        params: {
          country: "us",
          lang: "en",
          categories: "home",
          sortBy: "homewareStyles",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
