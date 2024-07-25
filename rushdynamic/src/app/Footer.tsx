import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ContactIconProps {
	img: string;
	alt: string;
	url: string;
}
const ContactIcon = ({ img, alt, url }: ContactIconProps) => {
	return (
		<Link href={url} passHref legacyBehavior>
			<a target="_blank" rel="noopener noreferrer">
				<Image
					className="opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
					src={img}
					alt={alt}
					height={20}
					width={20}
				/>
			</a>
		</Link>
	);
};

export default function Footer() {
	return (
		<div className="flex w-full justify-center gap-8 pb-4">
			<ContactIcon
				img="/images/icons/github.svg"
				alt="GitHub"
				url="https://github.com/rushdynamic"
			/>
			<ContactIcon
				img="/images/icons/linkedin.svg"
				alt="LinkedIn"
				url="https://www.linkedin.com/in/gokulsyam/"
			/>
		</div>
	);
}
