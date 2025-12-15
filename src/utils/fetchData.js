import axios from "axios";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export async function getData(url, options) {
  const res = await axios(url, options);
  return res.data;
}
