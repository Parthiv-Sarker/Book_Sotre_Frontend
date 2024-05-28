import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

import DashboardLayout from "./layouts/DashboardLayout.jsx";
import DashboardHome from "./pages/dashboard/DashboardHome.jsx";
import Home from "./pages/home/Home.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import App from "./App.jsx";
import "./index.css";

const clientId = import.meta.env.VITE_KINDE_CLIENT_ID;
const domain = import.meta.env.VITE_KINDE_DOMAIN;
const redirectUri = import.meta.env.VITE_KINDE_REDIRECT_URL;
const logoutUri = import.meta.env.VITE_KINDE_LOGOUT_URL;

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/dashboard",
				element: <AuthLayout />,
				children: [
					{
						path: "",
						element: <DashboardLayout />,
						children: [
							{
								path: "",
								element: <DashboardHome />,
							},
						],
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<KindeProvider
			clientId="82b1e8661f1240298737a77650a3ef72"
			domain="https://bookbazaar.kinde.com"
			redirectUri="https://book-sotre-frontend.vercel.app"
			logoutUri="https://book-sotre-frontend.vercel.app"
		>
			<RouterProvider router={router} />
		</KindeProvider>
	</React.StrictMode>
);
