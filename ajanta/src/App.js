import React, { useEffect, useState } from "react";
import './App.css';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import ContanctUs from './components/ContanctUs';
import Header from './components/Header';
import NotFound from './components/NotFound'
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import CategoryItems from "./components/CategoryItems";
import Footer from "./components/Footer";


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
          <Footer/>
      </div>
    </UserContext.Provider>
  </Provider>
  )
}

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/restaurant/:resId",
          element: <CategoryItems/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact-us",
          element: <ContanctUs/>
        }
      ],
      errorElement: <NotFound/>
    }
  ]);
  
return (
  <div>
     <RouterProvider router={appRouter}/>
  </div>
)
}

export default App;
