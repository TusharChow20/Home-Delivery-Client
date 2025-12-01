import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import riderImg from "../../assets/Images/agent-pending.png";

const RiderRegister = () => {
  const serviceCenter = useLoaderData() || [];
  const allRegions = serviceCenter.map((regions) => regions.region);
  const nonRepeatedRegion = [...new Set(allRegions)];

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedRegion = watch("region");

  const districtsFilter = (eachRegion) => {
    const districts = serviceCenter.filter(
      (region) => region.region === eachRegion
    );
    const districtName = districts.map((district) => district.district);
    return districtName;
  };

  const handleRiderSubmit = (data) => {
    const riderData = {
      name: data.name,
      age: data.age,
      email: data.email,
      region: data.region,
      district: data.district,
      nid: data.nid,
      contact: data.contact,
      drivingLicence: data.drivingLicence,
    };

    console.log("Rider Registration Data:", riderData);
    // Add your submission logic here
  };

  return (
    <div className="bg-base-200 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-3xl shadow-md w-full max-w-6xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE CONTENT */}
        <div>
          <h1 className="text-4xl font-bold text-green-800">Be a Rider</h1>
          <p className="text-gray-600 mt-2">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <hr className="my-6" />

          <h2 className="text-lg font-semibold mb-4">Tell us about yourself</h2>

          <form
            onSubmit={handleSubmit(handleRiderSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your age</span>
              </label>
              <input
                type="number"
                {...register("age")}
                placeholder="Your age"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Region</span>
              </label>
              <select
                {...register("region")}
                className="select select-bordered"
              >
                <option value="">Select your region</option>
                {nonRepeatedRegion.map((region, idx) => (
                  <option key={idx}>{region}</option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your District</span>
              </label>
              <select
                {...register("district")}
                className="select select-bordered"
              >
                <option value="">Select your district</option>
                {districtsFilter(selectedRegion).map((district, idx) => (
                  <option key={idx}>{district}</option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">NID No</span>
              </label>
              <input
                type="text"
                {...register("nid")}
                placeholder="NID"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact</span>
              </label>
              <input
                type="text"
                {...register("contact")}
                placeholder="Contact"
                className="input input-bordered"
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Driving Licence No</span>
              </label>
              <input
                type="text"
                {...register("drivingLicence")}
                placeholder="Driving Licence No"
                className="input input-bordered"
              />
            </div>

            <button className="btn bg-lime-400 hover:bg-lime-500 md:col-span-2 mt-4">
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={riderImg}
            alt="Rider Illustration"
            className="w-80 md:w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RiderRegister;
