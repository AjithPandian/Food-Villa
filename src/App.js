import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

// This known as the named imports
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//This is known as the default imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// Bridge to connect my redux and the react app
import { Provider } from "react-redux";

import store from "./utils/Store";

// Lazy loading the instamart component, It creates separate bundle file for instamart
// Actually this import return a promise which is being resolved by the lazy method
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          // We are doing this because react may load our component even before the bundled file is downloaded
          // To ensure to eradicate this issue react gives us the another component known as Suspense
          // fallback is used as props to load shimmer while the bundled file is being downloaded
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
