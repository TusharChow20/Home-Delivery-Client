import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecurity();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  const handlePayment = async () => {
    const paymentInfo = {
      deliveryCost: parcel.deliveryCost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;

    return res.data;
  };
  if (isLoading) {
    return <span>Loading................</span>;
  }
  return (
    <div>
      <h1>Please Pay: {parcel.parcelName}</h1>
      <button onClick={handlePayment} className="btn">
        {" "}
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
