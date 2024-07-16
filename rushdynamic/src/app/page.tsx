import Image from 'next/image';
import NavBar from './NavBar';
import ContactIcons from './ContactIcons';

export default function Home() {
	return (
		<main className="h-screen bg-light-grey flex flex-col custom-bg">
			<NavBar />
			<div className="h-full flex flex-col items-center justify-center">
				<div className="text-[12rem] font-neue-metana font-bold select-none text-dark-grey flex flex-col items-center leading-none">
					<div>Gokul</div>
					<div>Syam</div>
					{/* <img src="/images/squiggly.svg" width="100" /> */}

					<div className="flex w-full">
						<div className="flex-grow"></div>
						<div className="pr-2">
							<img src="/images/squiggly.svg" width="100" className="-mr-2" />
						</div>
					</div>
				</div>
				{/* <img src="/images/squiggly.svg" /> */}
				<div className="flex gap-8 items-center p-10 rounded-3xl">
					<div className="bg-[url('/images/scribble.svg')] h-[350px] w-[350px] bg-no-repeat flex items-center justify-center">
						<Image
							src="/images/headshot.jpg"
							width="250"
							height="250"
							alt="Profile picture"
							className="border border-light-grey rounded-full select-none "
						/>
					</div>
					<div className="max-w-[500px] font-montreal text-xl text-dark-grey">
						<p className="text-2xl">Hi,</p>
						<p>
							I'm a full-stack engineer working out of{' '}
							<span className="font-fraunces italic">Bangalore, India</span>{' '}
							with over 5 years of professional experience in the industry.
						</p>
					</div>
				</div>
			</div>
			<ContactIcons />
		</main>
	);
}
