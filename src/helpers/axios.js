import axios from "axios";
import config from '../env';


export const axiosapi = axios.create({
  baseURL: config.apiurl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true,
  },
});
