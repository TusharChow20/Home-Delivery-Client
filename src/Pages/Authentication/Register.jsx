import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";

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
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="  p-4 rounded-box w-full md:max-w-sm">
          {/* Name */}
          <label className="fieldset-legend ">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          {/* Email */}
          <label className="fieldset-legend mt-3">Email</label>
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
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="fieldset-legend mt-3">Password</label>
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
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button className="btn mt-4 w-full bg-lime-300 hover:bg-lime-400">
            Register
          </button>
        </fieldset>
      </form>
      <p className="text-center text-sm mt-4">
        Already have any account?{" "}
        <Link to={"/login"} className="link link-success font-medium">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Register;
