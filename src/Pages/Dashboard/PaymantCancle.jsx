import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div>
      <h1>Payment Cca</h1>
      <Link to={"/dashboard/myParcels"}>
        <button className="btn">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancel;
