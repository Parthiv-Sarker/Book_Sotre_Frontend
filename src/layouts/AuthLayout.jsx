import React, { useEffect,useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Loader } from "../components/index";

export default function Protected() {
	const navigate = useNavigate();
	const { isLoading, isAuthenticated } = useKindeAuth();

	
	useEffect(() => {
		if (!isLoading) {
			if (!isAuthenticated) {
				navigate("/");
			} else {
				navigate("/dashboard");
			}
		}
	}, [isAuthenticated, isLoading, navigate]);

	return isLoading ? (
		<Loader />
	) : (
		<Outlet />
	);
}
