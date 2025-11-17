import React from "react";
import liveTrack from "../../../assets/Images/live-tracking.png";
import delivery from "../../../assets/Images/tiny-deliveryman.png";
import safeDelivery from "../../../assets/Images/safe-delivery.png";

const Parcel = () => {
  return (
    <div className="space-y-2">
      <div className="md:flex bg-white rounded-lg overflow-hidden items-center">
        {/* Left section with image */}
        <div className="md:w-1/5 p-10">
          <img src={liveTrack} alt="Live Tracking" className="w-full h-auto" />
        </div>
        <div className="md:h-40 w-px md:border-r-2 border-dotted border-gray-400"></div>

        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Live Parcel Tracking
          </h1>
          <p className="text-gray-600 leading-relaxed md:pr-15">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="md:flex bg-white rounded-lg overflow-hidden items-center">
        {/* Left section with image */}
        <div className="md:w-1/5 p-10">
          <img src={delivery} alt="Live Tracking" className="w-full h-auto" />
        </div>
        <div className="md:h-40 w-px md:border-r-2 border-dotted border-gray-400"></div>

        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            100% Safe Delivery
          </h1>
          <p className="text-gray-600 leading-relaxed md:pr-15">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="md:flex bg-white rounded-lg overflow-hidden items-center">
        {/* Left section with image */}
        <div className="md:w-1/5 p-10">
          <img
            src={safeDelivery}
            alt="Live Tracking"
            className="w-full h-auto"
          />
        </div>
        <div className="md:h-40 w-px md:border-r-2 border-dotted border-gray-400"></div>

        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            24/7 Call Center Support
          </h1>
          <p className="text-gray-600 leading-relaxed md:pr-15">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
