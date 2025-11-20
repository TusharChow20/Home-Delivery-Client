import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Social from "./Social";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { registerUser, updateUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    // console.log(data.photo[0]);

    const imageFile = data.photo[0];
    registerUser(data.email, data.password).then(() => {
      const formData = new FormData();
      formData.append("image", imageFile);
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_image_hosting
          }`,
          formData
        )
        .then((res) => {
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUser(userProfile).then(() => {
            navigate(from, { replace: true });
          });
        });
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold">Create an Account</h1>
      <p className="text-gray-500 mb-6">Register with ZapShift</p>

      <form onSubmit={handleSubmit(handleRegister)} className="w-full max-w-sm">
        <fieldset className="p-4 rounded-box w-full space-y-3">
          {/* Name */}
          <label className="fieldset-legend">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          {/* Email */}
          <label className="fieldset-legend">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Email"
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="fieldset-legend">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message:
                  "Password must include uppercase, lowercase, number, and special character",
              },
            })}
            placeholder="Password"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* --------------------------- */}
          {/* ⭐ ADDED: Photo Upload Input */}
          {/* --------------------------- */}
          <label className="fieldset-legend">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            {...register("photo", { required: true })}
            className="file-input file-input-bordered w-full"
          />
          {errors.photo && (
            <p className="text-red-500 text-sm">Photo is required</p>
          )}
          {/* --------------------------- */}

          {/* Register Button */}
          <button className="btn mt-2 w-full bg-primary hover:bg-lime-400">
            Register
          </button>
        </fieldset>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link
          to="/login"
          state={location?.state}
          className="link link-success font-medium"
        >
          Login
        </Link>
      </p>

      <Social></Social>
    </div>
  );
};

export default Register;
