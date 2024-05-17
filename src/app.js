import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResMenu from "./components/ResMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery.js"; beacuse Lazy function
import userContext from "./utils/UserContext.js";
    
const Applayout=()=>{
    return(
    <div className="Applayout">
        <userContext.Provider value={{greeting:"Made With 💜 In India "}} >
            <Header/>
            <Outlet/>
        </userContext.Provider>    
    </div>
    
    )
}

const Grocery=lazy(()=> import("./components/Grocery.js"));

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>,
        children:
        [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1 className="fallback">LOADING GROCERY STORE.</h1>}>
                            <Grocery/>
                        </Suspense>
            },
            {
                path:"/restaurant/:resMenuID",
                element:<ResMenu/>
            },
        ]
    },
   
])


const root=ReactDOM.createRoot(document.querySelector(".inject"));

root.render(<RouterProvider router={AppRouter}/>);