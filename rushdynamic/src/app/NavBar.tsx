import React from 'react';

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
	return (
		<div className="h-12 border-b border-b-dark-grey flex items-center p-2 font-jetbrains-mono">
			<div className="flex w-full justify-start">
				<NavBarItem label="gokul.cc" title={true} />
				<div className="flex-grow flex items-center justify-center gap-6">
					<NavBarItem label="Work" />
					<NavBarItem label="Contact" />
					<NavBarItem label="Resume" />
				</div>
			</div>
		</div>
	);
}
