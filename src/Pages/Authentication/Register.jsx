import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset class="fieldset border border-base-300 p-4 rounded-box w-full max-w-sm">
          <label class="fieldset-legend">Name</label>
          <input
            type="text"
            placeholder="Name"
            class="input input-bordered w-full"
          />

          <label class="fieldset-legend mt-3">Email</label>
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            placeholder="Email"
            class="input input-bordered w-full"
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-500">
              {errors.mail.message}
            </p>
          )}
          <label class="fieldset-legend mt-3">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            type="password"
            placeholder="Password"
            class="input input-bordered w-full"
          />

          <button class="btn mt-4 w-full bg-lime-300 hover:bg-lime-400">
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
