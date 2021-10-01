import axios from "axios";

const BASE_URL = "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function getApiChampionshipYear(year) {
  const { data } = await axiosInstance.get(`${year}`);
  return data;
}