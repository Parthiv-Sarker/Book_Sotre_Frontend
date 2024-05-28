import React from "react";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Loader } from "../../components/index";

const Home = () => {
	const { login ,isAuthenticated, isLoading } =
		useKindeAuth();
	return isLoading ? (
		<Loader />
	) : (
		<div className="flex items-center justify-center h-screen w-screen bg-gray-900 font-bold text-white">
			<div className="flex-col">
				<h1 className="text-3xl md:text-5xl font-bold text-white">
					<span className="animated-text">
						Welcome To Book Store
					</span>
				</h1>
				<div className="flex justify-center items-center mt-8">
					{isAuthenticated ? (
						<>
							<Link
								className="animated-text inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md transform transition-all duration-300 hover:bg-blue-600 hover:scale-105"
								to="/dashboard"
							>
								Go to Dashboard
							</Link>
						</>
					) : (
						<>
							<button
								onClick={login}
								type="button"
								className="animated-text inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md transform transition-all duration-300 hover:bg-blue-600 hover:scale-105"
							>
								Login
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
