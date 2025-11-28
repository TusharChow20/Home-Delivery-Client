import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecurity();
  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`payment-success?session_id=${sessionId}`);
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h1>Payment success</h1>
    </div>
  );
};

export default PaymentSuccess;
