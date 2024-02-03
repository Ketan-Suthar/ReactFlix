import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContanctUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import CategoryItems from "./components/CategoryItems";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Ketan Suthar");
  }, [])

    return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
          <div className="app">
              {/* Header */}
              <Header />
              {/* Body */}
              <Outlet />
              {/* Footer */}
          </div>
        </UserContext.Provider>
      </Provider>
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
        element: <CategoryItems/>
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

