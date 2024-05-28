import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Navbar, Footer } from "../components/index";

const DashboardLayout = () => {
	const [open, setOpen] = useState(window.innerWidth >= 1200);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1200) {
				setOpen(false);
			} else {
				setOpen(true);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="flex h-full w-full">
			<Sidebar open={open} onClose={() => setOpen(false)} />
			<div className="h-full w-full bg-lightPrimary dark:bg-navy-900">
				<main
					className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
				>
					<div className="h-full">
						<Navbar
							onOpenSidenav={() => setOpen(true)}
							logoText={"Horizon UI Tailwind React"}
							brandText={"Parthiv"}
						/>
						<div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
							<Outlet />
						</div>
						<div className="p-3">
							<Footer />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
