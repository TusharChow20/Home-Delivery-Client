import React, { useRef } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const DeliveryHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecurity();
  const cashoutModal = useRef();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "delivery-history"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=delivered`
      );
      return res.data;
    },
  });

  const totalEarnings = parcels.reduce(
    (sum, item) => sum + (item.deliveryCost || 0),
    0
  );

  const handleCashout = async () => {
    try {
      const res = await axiosSecure.post("/cashout-request", {
        riderEmail: user.email,
        amount: totalEarnings,
      });

      if (res.data.success) {
        Swal.fire("Success!", "Cashout request sent!", "success");
        cashoutModal.current.close();
        refetch();
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Delivery History</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Parcel Name</th>
              <th>Sender → Receiver</th>
              <th>Delivery Cost (৳)</th>
              <th>Date</th>
              <th>Tracking ID</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((p, index) => (
              <tr key={p._id}>
                <td>{index + 1}</td>
                <td>{p.parcelName}</td>
                <td>
                  {p.senderName} → {p.receiverName}
                </td>
                <td>{p.deliveryCost}৳</td>
                <td>{new Date(p.createTime).toLocaleDateString()}</td>
                <td>{p.trackingId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Earnings + Cash Out */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-lg font-semibold">
          Total Earned: <span className="text-green-600">{totalEarnings}৳</span>
        </div>

        {/* Cash Out Button */}
        {totalEarnings > 0 && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => cashoutModal.current.showModal()}
          >
            Cash Out
          </button>
        )}
      </div>

      {/* Cash Out Modal */}
      <dialog ref={cashoutModal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Cash Out Confirmation</h3>
          <p className="py-4">
            You are requesting a cashout of{" "}
            <span className="font-bold text-green-600">{totalEarnings}৳</span>.
          </p>
          <div className="modal-action">
            <button className="btn btn-success" onClick={handleCashout}>
              Confirm
            </button>
            <button
              className="btn"
              onClick={() => cashoutModal.current.close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeliveryHistory;
