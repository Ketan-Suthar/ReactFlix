import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContanctUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    return (
        <div className="app">
             {/* Header */}
             <Header />
             {/* Body */}
             <Outlet />
             {/* Footer */}
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/about",
        element: <Suspense fallback={<NotFound/>}><About/></Suspense>
      },
      {
        path: "/contact-us",
        element: <ContanctUs/>
      }
    ],
    errorElement: <NotFound/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

