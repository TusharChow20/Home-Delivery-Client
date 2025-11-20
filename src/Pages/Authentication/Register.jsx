import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import Social from "./Social";

const Register = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    registerUser(data.email, data.password);
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

          {/* Register Button */}
          <button className="btn mt-2 w-full bg-primary hover:bg-lime-400">
            Register
          </button>
        </fieldset>
      </form>
      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link to="/login" className="link link-success font-medium">
          Login
        </Link>
      </p>
      <Social></Social>
    </div>
  );
};

export default Register;
