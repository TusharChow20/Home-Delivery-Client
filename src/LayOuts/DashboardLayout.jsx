import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const { role } = useRole();
  console.log(role);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">Navbar Title</div>
          </nav>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to={"/"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </Link>
              </li>

              {/* dashboard links */}
              <li>
                <NavLink
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Dashboard"
                  to={"/dashboard/myParcels"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M12 3L3 7v10l9 4 9-4V7l-9-4z"></path>
                    <path d="M12 12l9-5"></path>
                    <path d="M12 12v9"></path>
                    <path d="M3 7l9 5"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">My Parcels</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Payment History"
                  to={"/dashboard/paymentHistory"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M3 3v5h5" />
                    <path d="M3.05 13a9 9 0 1 0 .5-5.5" />
                    <path d="M12 7v5l3 3" />
                  </svg>

                  <span className="is-drawer-close:hidden">
                    Payment History
                  </span>
                </NavLink>
              </li>
              {/* aprove riders  */}
              {role === "admin" && (
                <>
                  <li>
                    <NavLink
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Approve Riders"
                      to={"/dashboard/approveRiders"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                        className="my-1.5 inline-block size-4"
                      >
                        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>

                      <span className="is-drawer-close:hidden">
                        Approve Riders
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Assign Riders"
                      to={"/dashboard/assignRiders"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-1.5 inline-block size-4"
                      >
                        <circle cx="9" cy="5" r="2" />
                        <path d="M4 20l5-7 2 3 4-6 5 10" />
                        <path d="M2 20h20" />
                      </svg>

                      <span className="is-drawer-close:hidden">
                        Assign Riders
                      </span>
                    </NavLink>
                  </li>

                  {/* List item */}
                  <li>
                    <NavLink
                      to={"/dashboard/userManage"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="User Manage"
                    >
                      {/* User icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-1.5 inline-block size-4"
                      >
                        <circle cx="9" cy="7" r="4" />
                        <path d="M17 11v6" />
                        <path d="M20 14h-6" />
                        <path d="M3 21v-2a6 6 0 0 1 12 0v2" />
                      </svg>

                      <span className="is-drawer-close:hidden">
                        User Manage
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
