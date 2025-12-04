import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiosSecurity from "./useAxiosSecurity";

const useRole = () => {
  const { user, loading } = useAuth();
  // console.log(user);

  const axiosSecure = useAxiosSecurity();
  const { isLoading, data: role = "user" } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      // console.log(res);

      return res.data?.role;
    },
  });
  return { role, isLoading };
};

export default useRole;
