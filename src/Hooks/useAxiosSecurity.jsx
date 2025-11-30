import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'}
});

const useAxiosSecurity = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user.accessToken} `;

        return config;
      }
    );
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        // console.log(err);
        if (err.status === 401 || err.status === 403) {
          signOutUser().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(err);
      }
    );
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user]);
  return axiosSecure;
};

export default useAxiosSecurity;
