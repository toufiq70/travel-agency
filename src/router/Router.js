// @ts-nocheck

import { createBrowserRouter } from "react-router-dom";
import Rooot from "../layout/Root/Rooot";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import DatePricing from "../pages/DatePricing/DatePricing";
import Destinations from "../pages/Destinations/Destinations";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import TourDetails from "../pages/TourDetails/TourDetails";
import TourList from "../pages/TourList/TourList";
import Tours from "../pages/Tours/Tours";
import TourSearch from "../pages/TourSearch/TourSearch";
import PrivateRoute from "./PrivateRouter/PrivateRoute";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rooot />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/tour-list",
        element: <TourList />,
      },
      {
        path: "/tour-search",
        element: <TourSearch />,
      },
      {
        path: "/destinations",
        element: <Destinations />,
      },
      {
        path: "/date-pricing",
        element: <DatePricing />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      // {
      //   path: "/profile_popUp",
      //   element: <ProfilePopUp />,
      // },
      {
        path: "/destination/:id",
        element: <Tours />,
        loader: ({ params }) =>
          fetch(
            `https://travel-tour-server.vercel.app/destination/${params.id}`
          ),
      },

      {
        path: "/tours/:id",
        element: (
          <PrivateRoute>
            {" "}
            <TourDetails />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://travel-tour-server.vercel.app/tours/${params.id}`),
      },
    ],
  },
]);
export default routes;
