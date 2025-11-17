import React from "react";
import liveTrack from "../../../assets/Images/live-tracking.png";

const Parcel = () => {
  return (
    <div>
      <div className="flex bg-white rounded-lg overflow-hidden items-center">
        {/* Left section with image */}
        <div className="w-1/5 p-10">
          <img src={liveTrack} alt="Live Tracking" className="w-full h-auto" />
        </div>

        {/* Dotted divider line - centered and shorter */}
        <div className="h-32 w-px border-r-2 border-dotted border-gray-400"></div>

        {/* Right section with content */}
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Live Parcel Tracking
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
