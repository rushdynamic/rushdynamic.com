import Image from 'next/image';
import NavBar from './NavBar';
import ContactIcons from './ContactIcons';

export default function Home() {
	return (
		<main className="min-h-screen bg-light-grey flex flex-col justify-between custom-bg">
			<div className="flex flex-col gap-4">
				<NavBar />
				<div className="text-7xl md:text-[12vw] font-neue-metana font-bold select-none text-dark-grey flex flex-col items-center leading-none flex-wrap p-2">
					<div className="grow shrink text-center">Gokul Syam</div>
					{/* <div className="flex w-fit justify-center">
						<div className="flex-grow"></div>
						<div className="p-2">
							<img src="/images/squiggly.svg" width="100" />
						</div>
					</div> */}
				</div>
				<div className="flex-grow"></div>
			</div>
			<div className="h-full flex flex-col items-center justify-center">
				<div className="flex flex-col md:flex-row gap-12 items-center px-10 pb-10 md:pt-10 rounded-3xl">
					<div className="border border-solid border-dark-grey bg-gradient-to-t from-[transparent] to-[#f2f2f2] flex items-center justify-center p-7">
						<Image
							src="/images/headshot.jpg"
							width="200"
							height="200"
							alt="Profile picture"
							className="select-none w-[150px] md:w-[200px]"
						/>
					</div>
					<div className="md:max-w-[600px] font-montreal text-xl text-dark-grey">
						<p className="text-2xl pb-3">Hi,</p>
						<p className="pb-3">
							I'm a full-stack engineer with over 5 years of professional
							experience in the industry, currently working out of{' '}
							<span className="font-fraunces italic">Bangalore, India</span>
							{'.'}
						</p>
						<p>
							I'm also an open source enthusiast, a hobbyist photographer, and
							someone who relishes art in all its forms.
						</p>
					</div>
				</div>
			</div>
			{/* <div className="grow" /> */}
			<ContactIcons />
		</main>
	);
}
