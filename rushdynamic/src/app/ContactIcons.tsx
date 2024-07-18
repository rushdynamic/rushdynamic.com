import React from 'react';

interface ContactIconProps {
	img: string;
}
const ContactIcon = ({ img }: ContactIconProps) => {
	return (
		<img
			className="opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
			src={img}
			height={20}
			width={20}
		/>
	);
};

export default function ContactIcons() {
	return (
		<div className="flex w-full justify-center gap-8 pb-4">
			<ContactIcon img="/images/icons/github.svg" />
			<ContactIcon img="/images/icons/linkedin.svg" />
		</div>
	);
}
