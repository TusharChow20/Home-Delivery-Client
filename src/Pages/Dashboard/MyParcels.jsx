import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecurity from "../../Hooks/useAxiosSecurity";
import { BsEye, BsTrash2, BsTruck } from "react-icons/bs";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecurity();
  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            All Deliveries
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <BsTruck className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-gray-900">129</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <BsTruck className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Return</p>
                  <p className="text-2xl font-bold text-gray-900">1,325</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <BsTruck className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Paid Return</p>
                  <p className="text-2xl font-bold text-gray-900">50</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table - Desktop */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Cons. ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Store
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Recipient Info
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Delivery Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Payment
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {parcels.map((delivery, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {delivery._id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {delivery.parcelName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 whitespace-pre-line">
                        {delivery.receiverName}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${delivery.statusColor}`}
                        >
                          {delivery.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <div className="whitespace-pre-line">
                          {delivery.deliveryCost}
                          {/* {delivery.charge && `\n${delivery.charge}`}
                          {delivery.discount && `\n${delivery.discount}`} */}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${delivery.paymentColor}`}
                        >
                          {delivery.payment}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="px-4 py-2 bg-lime-400 hover:bg-lime-500 text-gray-900 rounded-md text-sm font-medium transition-colors">
                            Pay
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                            <BsEye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            // onClick={() => handleDelete(delivery.id)}
                            className="p-2 hover:bg-red-50 rounded-md transition-colors"
                          >
                            <BsTrash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cards - Mobile/Tablet */}
          <div className="lg:hidden space-y-4">
            {parcels.map((delivery, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {delivery._id}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {delivery.parcelName}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${delivery.statusColor}`}
                  >
                    {delivery.status}
                  </span>
                </div>

                <div className="mb-3 pb-3 border-b border-gray-200">
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {delivery.receiverName}
                  </p>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {delivery.deliveryCost}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${delivery.paymentColor}`}
                  >
                    {delivery.payment}
                  </span>

                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-lime-400 hover:bg-lime-500 text-gray-900 rounded-md text-sm font-medium transition-colors">
                      Pay
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                      <BsEye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-md transition-colors">
                      <BsTrash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyParcels;
