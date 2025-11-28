import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [paymentInfo, setPaymentInfo] = useState();
  const axiosSecure = useAxiosSecurity();
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h1>Payment success</h1>
      <p>Transaction Id: {paymentInfo?.transactionId}</p>
      <p>Tracking Id: {paymentInfo?.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
