import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";
import { ShieldCheck, ShieldX, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const UserManage = () => {
  const axiosSecure = useAxiosSecurity();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = async (id) => {
    const roleInfo = { role: "admin" };
    await axiosSecure.patch(`/users/${id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User added as Admin",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
    refetch();
  };

  const handleRemoveAdmin = async (id) => {
    const roleInfo = { role: "user" };
    await axiosSecure.patch(`/users/${id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Removed from  Admin Role",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
    refetch();
  };

  const handleDeleteUser = async (id) => {
    await axiosSecure.delete(`/users/${id}`);
    refetch();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        User Management ({users.length})
      </h1>

      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 font-semibold text-sm">User Info</th>
              <th className="p-3 font-semibold text-sm">Email</th>
              <th className="p-3 font-semibold text-sm">Role</th>
              <th className="p-3 font-semibold text-sm">Admin Action</th>
              <th className="p-3 font-semibold text-sm">Other Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t hover:bg-gray-50">
                {/* User info */}
                <td className="p-3">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">
                    ID: {user._id.slice(0, 8)}...
                  </div>
                </td>

                {/* Email */}
                <td className="p-3 text-gray-700">{user.email}</td>

                {/* Role */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === "admin"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* Admin Action */}
                <td className="p-3">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user._id)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
                    >
                      <ShieldX size={16} /> Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-md hover:bg-green-200"
                    >
                      <ShieldCheck size={16} /> Make Admin
                    </button>
                  )}
                </td>

                {/* Other Actions */}
                <td className="p-3">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManage;
