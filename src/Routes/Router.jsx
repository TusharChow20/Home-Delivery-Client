import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import AuthLayout from "../LayOuts/AuthLayout";
import RiderRegister from "../Pages/BeARider/RiderRegister";
import PrivateRoute from "./PrivateRoute";
import ParcelSend from "../Pages/Parcel/ParcelSend";
import DashboardLayout from "../LayOuts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels";
import Payment from "../Pages/Dashboard/Payment";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess";
import PaymentCancel from "../Pages/Dashboard/PaymantCancle";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import ApproveRiders from "../Pages/Dashboard/ApproveRiders";
import UserManage from "../Pages/Dashboard/UserManage";
import AdminOnlyRoute from "./AdminOnlyRoute";
import AssignRiders from "../Pages/Dashboard/AssignRiders";
import AcceptParcels from "../Pages/Dashboard/AcceeptParcels";
import RiderOnlyRoute from "./RiderOnlyRotue";
import DeliveryHistory from "../Pages/Dashboard/DeliveryHistory";
import ParcelTrack from "../Pages/ParcelTrack/ParcelTrack";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/stores.json").then((res) => res.json()),
      },
      {
        path: "/parcelTrack/:trackingId",
        Component: ParcelTrack,
      },
      {
        path: "/riderRegistration",
        element: (
          <PrivateRoute>
            <RiderRegister></RiderRegister>
          </PrivateRoute>
        ),
        loader: () => fetch("/stores.json").then((res) => res.json()),
      },
      {
        path: "/sendParcel",
        element: (
          <PrivateRoute>
            <ParcelSend></ParcelSend>
          </PrivateRoute>
        ),
        loader: () => fetch("/stores.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myParcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "paymentHistory",
        Component: PaymentHistory,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-canceled",
        Component: PaymentCancel,
      },
      {
        path: "assignRiders",
        Component: AssignRiders,
      },
      {
        path: "acceptParcel",
        element: (
          <RiderOnlyRoute>
            <AcceptParcels></AcceptParcels>
          </RiderOnlyRoute>
        ),
      },
      {
        path: "deliveryHHistory",
        element: (
          <RiderOnlyRoute>
            <DeliveryHistory></DeliveryHistory>
          </RiderOnlyRoute>
        ),
      },
      {
        path: "approveRiders",
        element: (
          <AdminOnlyRoute>
            <ApproveRiders></ApproveRiders>
          </AdminOnlyRoute>
        ),
      },
      {
        path: "userManage",
        element: (
          <AdminOnlyRoute>
            <UserManage></UserManage>
          </AdminOnlyRoute>
        ),
      },
    ],
  },
]);

export default router;
