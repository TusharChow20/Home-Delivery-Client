import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const AdminOnlyRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return <span>Loading...............</span>;
  }
  if (role !== "admin") {
    return <span>Forbidden</span>;
  }
  return children;
};

export default AdminOnlyRoute;
