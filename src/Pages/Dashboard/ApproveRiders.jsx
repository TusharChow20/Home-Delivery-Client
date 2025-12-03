import { useQuery } from "@tanstack/react-query";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";
import {
  CheckCircle,
  XCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
} from "lucide-react";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecurity();
  const {
    refetch,
    data: riders = [],
    isLoading,
  } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleApprove = (rider) => {
    const infoUpdate = { status: "approved", email: rider.email };
    axiosSecure
      .patch(`/riders/${rider._id}`, infoUpdate)
      .then((response) => {
        if (response.data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: "Your rider registration has been submitted successfully",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };
  const handleDecline = (rider) => {
    const infoUpdate = { status: "declined", email: rider.email };
    axiosSecure
      .patch(`riders/${rider._id}`, infoUpdate)
      .then((response) => {
        if (response.data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "Denied!",
            text: "Your rider registration has been Denied",
            icon: "fail",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading riders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Rider Applications
              </h1>
              <p className="text-gray-600">
                Review and manage pending rider approvals
              </p>
            </div>
            <div className="bg-indigo-600 text-white rounded-full px-6 py-3 text-center">
              <div className="text-3xl font-bold">{riders.length}</div>
              <div className="text-sm opacity-90">Pending</div>
            </div>
          </div>
        </div>

        {/* Riders Grid */}
        {riders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-indigo-100">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              No Pending Applications
            </h3>
            <p className="text-gray-600">
              All rider applications have been reviewed
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riders.map((rider) => (
              <div
                key={rider._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 overflow-hidden group"
              >
                {/* Header with status */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-indigo-600" />
                    </div>
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {rider.status || "Pending"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{rider.name}</h3>
                  <p className="text-indigo-100 text-sm">Age: {rider.age}</p>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Email
                      </p>
                      <p className="text-sm text-gray-800 truncate">
                        {rider.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Contact
                      </p>
                      <p className="text-sm text-gray-800">{rider.contact}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Location
                      </p>
                      <p className="text-sm text-gray-800">
                        {rider.district}, {rider.region}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Licenses
                      </p>
                      <p className="text-sm text-gray-800">
                        NID: {rider.nid} | DL: {rider.drivingLicence}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Work Status
                      </p>
                      <p className="text-sm text-gray-800">
                        workStatus: {rider.workStatus}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Applied On
                      </p>
                      <p className="text-sm text-gray-800">
                        {new Date(rider.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-3">
                  {rider.status === "approved" ||
                  rider.status === "declined" ? (
                    <button className="btn cursor-not-allowed" disabled>
                      {rider.status.toUpperCase()}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleApprove(rider)}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>Approve</span>
                      </button>

                      <button
                        onClick={() => handleDecline(rider)}
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                      >
                        <XCircle className="w-5 h-5" />
                        <span>Decline</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApproveRiders;
