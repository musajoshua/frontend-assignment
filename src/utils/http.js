import axios from "axios";

/**
 * @returns {Object} axiosInstance
 */
const http = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

export default http;
