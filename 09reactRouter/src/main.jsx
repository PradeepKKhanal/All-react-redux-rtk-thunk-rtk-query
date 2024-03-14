import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home, About, Contact, Layout,Products, ProductDetails } from "./pages";
import { Letter, Call } from "./components";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
const router = createBrowserRouter([
	// {
	//   path:'/',
	//   element:<Home></Home>
	// },{
	//   path: '/About',
	//   element:<About/>
	// },
	// {
	//   path: '/Contact',
	//   element:<Contact/>
	// }
	{
		path: "/",
		element: <Layout />,
		errorElement: <h1>Page not found</h1>,
		children: [
			{ path: "", element: <Home></Home> },
			{ path: "about", element: <About></About> },
			{
				path: "contact",
				element: <Contact></Contact>,
				children: [
					{ path: "letter", element: <Letter></Letter> },
					{ path: "call", element: <Call></Call> },
				],
			},
      {path:"products",
      element:<Products></Products>,
      children:[
        {path:":productid",
         element:<ProductDetails></ProductDetails>}
      ]
    },
    {
      path:"about-us",
      element:<Navigate to="/about"></Navigate>
    }
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}></RouterProvider>
);
