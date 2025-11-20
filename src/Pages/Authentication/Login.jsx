import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import Social from "./Social";

const Login = () => {
  const { logInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignIn = (data) => {
    logInUser(data.email, data.password);
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="card w-full max-w-md ">
        <div className="card-body">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className=" mb-6">Login with ShiftingHobe</p>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <fieldset className="space-y-4">
              <legend className="sr-only">Login Credentials</legend>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered w-full"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-400">
                    Email is required
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className="input input-bordered w-full"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </fieldset>

            <div className="text-right">
              <a
                href="#"
                className="link link-hover text-sm text-base-content/70"
              >
                Forget Password?
              </a>
            </div>

            <button
              // onClick={handleSubmit}
              className="btn btn-primary w-full text-black"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have any account?{" "}
            <Link to={"/register"} className="link link-success font-medium">
              Register
            </Link>
          </p>

          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Login;
