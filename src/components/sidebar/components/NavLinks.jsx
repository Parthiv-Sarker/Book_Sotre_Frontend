import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
	MdHome,
	MdOutlineShoppingCart,
	MdPerson,
	MdLock,
	MdAutoStories,
} from "react-icons/md";

const NavLinks = () => {
	const location = useLocation();
	const isAdmin = true;

	const links = [
		{
			title: "Dadhboard",
			path: "/dashboard",
			icon: <MdHome className="h-6 w-6" />,
		},
		{
			title: "Add Books",
			path: "/dashboard/add-book",
			icon: <MdAutoStories className="h-6 w-6" />,
		},
		{
			title: "Marketplace",
			path: "/dashboard/marketplace",
			icon: <MdOutlineShoppingCart className="h-6 w-6" />,
		},
		{
			title: "Profile",
			path: "/dashboard/profile",
			icon: <MdPerson className="h-6 w-6" />,
		},
		isAdmin && {
			title: "Admin",
			path: "/dashboard/admin",
			icon: <MdLock className="h-6 w-6" />,
		},
	].filter(Boolean);

	return (
		<>
			{links.map((link, index) => (
				<div key={index} className="my-2">
					<Link to={link.path}>
						<div className="relative mb-3 flex hover:cursor-pointer">
							<div
								className="my-[3px] flex cursor-pointer items-center px-8"
								key={index}
							>
								<span
									className={`${
										location.pathname === link.path
											? "font-bold text-brand-500 dark:text-white"
											: "font-medium text-gray-600"
									}`}
								>
									{link.icon ? link.icon : ""}{" "}
								</span>
								<p
									className={`leading-1 ml-4 flex ${
										location.pathname === link.path
											? "font-bold text-navy-700 dark:text-white"
											: "font-medium text-gray-600"
									}`}
								>
									{link.title}
								</p>
							</div>
							{location.pathname === link.path ? (
								<div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
							) : null}
						</div>
					</Link>
				</div>
			))}
		</>
	);
};

export default NavLinks;
