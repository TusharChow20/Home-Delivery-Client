import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const RiderOnlyRoute = ({ children }) => {
  const { loading,user } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading || !user) {
    return <span>Loading......</span>;
  }
  if (role !== "rider") {
    return <span>Forbidden access</span>;
  }
  return children;
};

export default RiderOnlyRoute;
