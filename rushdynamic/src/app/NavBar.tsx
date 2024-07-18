'use client';

import React, { useEffect, useState } from 'react';

interface NavBarItemProps {
	label: string;
	title?: boolean;
}
const NavBarItem = ({ label, title }: NavBarItemProps) => {
	return (
		<div className="before:content-['['] before:invisible after:content-[']'] after:invisible hover:before:visible hover:after:visible hover:cursor-pointer">
			{label}
		</div>
	);
};

export default function NavBar() {
	const [currTime, setCurrTime] = useState<any>();
	useEffect(() => {
		const secInterval = setInterval(
			() => setCurrTime(new Date().toLocaleTimeString()),
			1000
		);

		return () => clearInterval(secInterval);
	}, []);
	return (
		<div className="h-12 border-b border-b-dark-grey flex items-center p-2 font-jetbrains-mono mb-4">
			<div className="flex w-full justify-start">
				<NavBarItem label="gokul.cc" title={true} />
				<div className="flex-grow flex items-center justify-center gap-6">
					<NavBarItem label="Work" />
					<NavBarItem label="Contact" />
					<NavBarItem label="Resume" />
				</div>
				<div>{currTime}</div>
			</div>
		</div>
	);
}
