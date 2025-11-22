import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";
import useAuth from "../../Hooks/useAuth";

const ParcelSend = () => {
  const { user } = useAuth();
  // console.log(user.email);

  const axiosSecure = useAxiosSecurity();
  const serviceCenter = useLoaderData();
  const allRegions = serviceCenter.map((regions) => regions.region);
  const nonRepeatedRegion = [...new Set(allRegions)];
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const senderRegion = watch("senderRegion");

  const receiverRegion = watch("receiverRegion");
  const districtsFilter = (eachRegion) => {
    const districts = serviceCenter.filter(
      (region) => region.region === eachRegion
    );
    const districtName = districts.map((district) => district.district);
    return districtName;
  };
  // console.log(nonRepeatedRegion);

  const handleParcel = (data) => {
    console.log("Form data:", data);
    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    const isDocument = data.documentType === "document";
    let deliveryCost = 0;
    const parcelWeight = parseFloat(data.parcelWeight);
    if (isDocument) {
      deliveryCost = sameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 4) {
        deliveryCost = sameDistrict ? 110 : 150;
      } else {
        const fixedCost = sameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 4;
        const extraWeightCost = sameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        deliveryCost = fixedCost + extraWeightCost;
      }
    }
    // console.log(deliveryCost);

    // console.log(sameDistrict);

    // alert("Proceeding to confirm booking...");
    Swal.fire({
      title: "Are you sure?",
      text: `Total Cost ${deliveryCost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmed",
          text: "Your Parcel is confirmed",
          icon: "success",
        });
        axiosSecure.post("/parcels", data);
      }
    });
  };

  return (
    <div className="min-h-screen p-8">
      <form
        onSubmit={handleSubmit(handleParcel)}
        className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Send Parcel</h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Enter your parcel details
          </h2>

          <div className="flex gap-6 mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                {...register("documentType")}
                // name="documentType"
                value="document"
                // checked={formData.documentType === "document"}
                // onChange={handleChange}
                className="w-5 h-5 text-green-600"
              />
              <span className="ml-2 text-gray-900 font-medium">Document</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                {...register("documentType")}
                value="not-document"
                // checked={formData.documentType === "not-document"}
                // onChange={handleChange}
                className="w-5 h-5 text-gray-400"
              />
              <span className="ml-2 text-gray-900 font-medium">
                Not-Document
              </span>
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* parcel info */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Parcel Name
              </label>
              <input
                type="text"
                {...register("parcelName")}
                // value={formData.parcelName}
                // onChange={handleChange}
                placeholder="Parcel Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                {...register("parcelWeight")}
                // value={formData.parcelWeight}
                // onChange={handleChange}
                placeholder="Parcel Weight (KG)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Sender Details
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    {...register("senderName")}
                    placeholder="Sender Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Sender Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    {...register("senderEmail")}
                    placeholder="Sender Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-not-allowed"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="senderAddress"
                    // value={formData.senderAddress}
                    // onChange={handleChange}
                    placeholder="Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Sender Contact No
                  </label>
                  <input
                    type="text"
                    name="senderContact"
                    // value={formData.senderContact}
                    // onChange={handleChange}
                    placeholder="Sender Contact No"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Your Region
                </label>
                <select
                  {...register("senderRegion")}
                  // value={formData.senderRegion}
                  // onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="">Select your region</option>
                  {nonRepeatedRegion.map((region) => (
                    <option>{region}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Your District
                </label>
                <select
                  {...register("senderDistrict")}
                  // value={formData.senderRegion}
                  // onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="">Select your District</option>
                  {districtsFilter(senderRegion).map((region) => (
                    <option>{region}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Pickup Instruction
                </label>
                <textarea
                  name="pickupInstruction"
                  // value={formData.pickupInstruction}
                  // onChange={handleChange}
                  placeholder="Pickup Instruction"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Receiver Details
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Receiver Name
                  </label>
                  <input
                    type="text"
                    {...register("receiverName")}
                    placeholder="Receiver Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Receiver Email
                  </label>
                  <input
                    type="email"
                    {...register("receiverEmail")}
                    placeholder="Receiver Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Receiver Address
                  </label>
                  <input
                    type="text"
                    name="receiverAddress"
                    // value={formData.receiverAddress}
                    // onChange={handleChange}
                    placeholder="Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Receiver Contact No
                  </label>
                  <input
                    type="text"
                    name="receiverContact"
                    // value={formData.receiverContact}
                    // onChange={handleChange}
                    placeholder="Receiver Contact No"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Receiver Region
                </label>
                <select
                  {...register("receiverRegion")}
                  // name="receiverRegion"
                  // value={formData.receiverRegion}
                  // onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="">Select your region</option>
                  {nonRepeatedRegion.map((region, idx) => (
                    <option key={idx}>{region}</option>
                  ))}
                </select>
              </div>
              {/* receiver district  */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Receiver District
                </label>
                <select
                  {...register("receiverDistrict")}
                  // value={formData.receiverRegion}
                  defaultValue={"Select a District"}
                  // onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="">Select your DIstrict</option>
                  {districtsFilter(receiverRegion).map((region, idx) => (
                    <option key={idx}>{region}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Delivery Instruction
                </label>
                <textarea
                  name="deliveryInstruction"
                  // value={formData.deliveryInstruction}
                  // onChange={handleChange}
                  placeholder="Delivery Instruction"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-4">
            * PickUp Time 4pm-7pm Approx.
          </p>
          <button
            // onClick={handleSubmit}
            className="px-6 py-3 bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium rounded-md transition-colors"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default ParcelSend;
