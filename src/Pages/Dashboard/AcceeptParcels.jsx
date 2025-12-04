import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";
import Swal from "sweetalert2";

const AcceptParcels = () => {
  const axiosSecure = useAxiosSecurity();
  const { user } = useAuth();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver-assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver-assigned`
      );
      return res.data;
    },
  });

  const handleAccept = async (parcel) => {
    const parcelInfo = { deliveryStatus: "rider-on-the-way" };
    await axiosSecure
      .patch(`/parcels/${parcel._id}/status`, parcelInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for accepting",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  console.log(parcels);

  const handleReject = async (id) => {
    await axiosSecure.patch(`/parcels/reject/${id}`);
    refetch();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Parcels Pending Pickup – {parcels.length}
      </h1>

      <div className="space-y-3">
        {parcels.map((parcel) => (
          <div
            key={parcel._id}
            className="border rounded-lg p-4 flex items-center justify-between bg-white shadow-sm"
          >
            {/* Location */}
            <div>
              <p className="font-semibold text-lg">{parcel.receiverDistrict}</p>
              <p className="text-sm text-gray-500">
                Tracking ID: {parcel.trackingId}
              </p>
            </div>

            {/* Buttons */}
            {parcel.deliveryStatus === "driver-assigned" ? (
              <div className="flex gap-3">
                <button
                  onClick={() => handleAccept(parcel)}
                  className="px-3 py-1.5 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  Accept
                </button>

                <button
                  onClick={() => handleReject(parcel)}
                  className="px-3 py-1.5 rounded bg-red-600 text-white hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            ) : (
              <button
                className="px-3 py-1.5 rounded bg-gray-600 text-white hover:bg-gray-700 cursor-not-allowed"
                disabled
              >
                Accepted
              </button>
            )}
          </div>
        ))}

        {parcels.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No parcels found.</p>
        )}
      </div>
    </div>
  );
};

export default AcceptParcels;
