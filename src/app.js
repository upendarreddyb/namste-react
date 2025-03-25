import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, Suspense, lazy } from 'react';
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaruntsMenu from "./components/RestaruntsMenu";
import UserContext from './utils/UserContext';
import { useState, useEffect } from "react";
import appStore from './utils/appStore';
import Cart from "./components/Cart";


const Approot = () => {


    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Upendar Reddy"
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
    {
        path: "",
        element: <Approot />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/rescardmenu/:resId",
                element: <RestaruntsMenu />
            }, {
                path: "grocery",
                element: <Suspense fallback={<h2>Loading....</h2>}>

                    <Grocery />
                </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />

            }
        ],
        errorElement: <Error />

    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 
