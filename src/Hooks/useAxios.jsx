import axios from "axios";
import React from "react";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'}
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
