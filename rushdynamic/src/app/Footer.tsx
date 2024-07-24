import Image from 'next/image';
import React from 'react';

interface ContactIconProps {
	img: string;
	alt: string;
}
const ContactIcon = ({ img, alt }: ContactIconProps) => {
	return (
		<Image
			className="opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
			src={img}
			alt={alt}
			height={20}
			width={20}
		/>
	);
};

export default function Footer() {
	return (
		<div className="flex w-full justify-center gap-8 pb-4">
			<ContactIcon img="/images/icons/github.svg" alt="GitHub" />
			<ContactIcon img="/images/icons/linkedin.svg" alt="LinkedIn" />
		</div>
	);
}
