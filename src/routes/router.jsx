import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Main/Home/Home";
import Main from "../layout/Main/Main";
import Login from "../pages/Main/Login/Login";
import SinglePlaceRegistration from "../pages/Main/Home/SinglePlaceRegistration";
import Scan from "../pages/Main/Scan/Scan";
import Wallet from "../pages/Main/Wallet/Wallet";
import Notification from "../pages/Main/Notification/Notification";
import CredentialsDetails from "../pages/Main/Wallet/CredentialsDetails";
import HomeCredentialsDetails from "../components/HomeCredentialsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/scan",
        element: <Scan />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/credentials",
        element: <CredentialsDetails />,
      },
      {
        path: "/home_credentials_details",
        element: <HomeCredentialsDetails />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/singleRegistration",
        element: <SinglePlaceRegistration />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
