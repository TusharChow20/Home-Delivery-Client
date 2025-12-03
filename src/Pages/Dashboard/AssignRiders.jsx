import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";
import Swal from "sweetalert2";

const AssignRiders = () => {
  const [selectParcel, setSelectParcel] = useState(null);
  const axiosSecure = useAxiosSecurity();
  const modalUse = useRef();
  const { data: parcels = [], refetch: parcelRefetch } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", selectParcel?.senderDistrict, "available"],
    enabled: !!selectParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&district=${selectParcel.senderDistrict}&workStatus=available`
      );
      return res.data;
    },
  });

  const onClickModal = (parcel) => {
    setSelectParcel(parcel);
    modalUse.current.showModal();
  };

  const handleAssignRider = (rider) => {
    const riderInfo = {
      riderId: rider._id,
      riderEmail: rider.email,
      riderName: rider.name,
      parcelId: selectParcel._id,
    };
    axiosSecure.patch(`/parcels/${selectParcel._id}`, riderInfo).then((res) => {
      if (res.data.modifiedCount) {
        modalUse.current.close();
        parcelRefetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Rider has assigned",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-4">
        Pending Pickup Parcels ({parcels.length})
      </h1>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>

              <th>Parcel</th>
              <th>Document Type</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Tracking ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.parcelName}</td>
                <td>{item.documentType}</td>
                <td>{item.senderName}</td>
                <td>{item.receiverName}</td>
                <td>{item.deliveryCost} Tk</td>
                <td>
                  <span className="px-2 py-1 text-sm rounded bg-yellow-100 text-yellow-700">
                    {item.deliveryStatus}
                  </span>
                </td>
                <td className="font-mono">{item.trackingId}</td>

                {/* ✅ Assign Button */}
                <td>
                  <button
                    onClick={() => onClickModal(item)}
                    className="btn btn-sm bg-green-300 text-black "
                  >
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={modalUse} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-lg mb-4">
            Available Riders: {riders.length}
          </h3>

          {/* Riders Table */}
          {riders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>District</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {riders.map((rider, index) => (
                    <tr key={rider._id}>
                      <td>{index + 1}</td>
                      <td>{rider.name}</td>
                      <td>{rider.district}</td>
                      <td>{rider.contact}</td>
                      <td>
                        <button
                          className="btn btn-sm bg-green-300 text-black"
                          onClick={() => handleAssignRider(rider)}
                        >
                          Assign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center py-4 text-gray-500">
              No riders available in this district.
            </p>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
