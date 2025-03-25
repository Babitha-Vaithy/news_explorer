export const APIkey = "cc4e685ea70d441ba88e7408fe27d0f8";

export const baseUrlSuffix =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything?q="
    : "https://newsapi.org/v2/everything?q=";

export const baseUrlPrefix = `&from=${new Date()}&sortBy=publishedAt&apiKey=${APIkey}`;
