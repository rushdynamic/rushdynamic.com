'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<div className="text-7xl md:text-[12vw] lg:mt-4 font-neue-metana font-bold select-none text-dark-grey flex flex-col items-center leading-none flex-wrap p-2">
				<div className="grow shrink text-center">Gokul Syam</div>
			</div>
			<div className="flex-grow"></div>
			<div className="h-full flex flex-col items-center justify-center">
				<div className="flex flex-col xl:flex-row gap-8 md:gap-14 items-center px-10 pb-10 md:pt-4 rounded-3xl">
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: 'easeInOut', duration: 0.5 }}
						className="group border-t border-solid border-dark-grey bg-gradient-to-t from-[transparent] to-[transparent] flex items-center justify-center p-8 md:p-12"
					>
						<div className="flex relative w-[250px] h-[250px] md:w-[500px] md:h-[500px] xl:w-[700px] xl:h-[700px]">
							<Image
								src="/images/headshot-olive.png"
								layout="fill"
								objectFit="cover"
								alt="Profile picture"
								className="select-none w-[250px] md:w-[700px] "
							/>
							<Image
								src="/images/headshot-pixelated.svg"
								layout="fill"
								objectFit="cover"
								alt="Profile picture"
								className="select-none w-[250px] md:w-[700px] transition-opacity duration-1000 ease-out opacity-100 hover:opacity-0"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: 'easeInOut', duration: 0.75 }}
						className="md:max-w-[600px] font-montreal text-xl md:text-2xl lg:text-3xl text-dark-grey"
					>
						<p className="text-2xl md:text-3xl lg:text-4xl pb-3">Hi,</p>
						<p className="pb-3">
							{
								"I'm a full-stack engineer with over 5 years of professional experience in the industry, currently working out of "
							}
							<span className="font-fraunces italic">Bangalore, India</span>
						</p>
						<p>
							{
								"I'm also an open source enthusiast, a hobbyist photographer, and someone who relishes art in all its forms."
							}
						</p>
					</motion.div>
				</div>
			</div>
		</>
	);
}
