import Image from 'next/image';
import NavBar from './NavBar';
import ContactIcons from './ContactIcons';

export default function Home() {
	return (
		<main className="min-h-screen bg-light-grey flex flex-col justify-between custom-bg">
			<NavBar />
			<div className="h-full flex flex-col items-center justify-center">
				<div className="text-7xl md:text-[12vw] font-neue-metana font-bold select-none text-dark-grey flex flex-col items-center leading-none flex-wrap p-2">
					<div className="grow shrink text-center">Gokul Syam</div>
					<div className="flex w-full justify-center">
						<div className="flex-grow"></div>
						<div className="p-2">
							<img src="/images/squiggly.svg" width="100" />
						</div>
					</div>
				</div>
				{/* <img src="/images/squiggly.svg" /> */}
				<div className="flex flex-col md:flex-row gap-8 items-center p-10 rounded-3xl">
					<div className="bg-[url('/images/scribble.svg')] bg-center bg-no-repeat flex items-center justify-center p-9">
						<Image
							src="/images/headshot.jpg"
							width="250"
							height="250"
							alt="Profile picture"
							className="border-[3px] border-light-grey rounded-full select-none w-[150px] md:w-[250px]"
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
							I'm also an open source enthusiast, hobbyist photographer, and
							someone who cherishes art in all its forms.
						</p>
					</div>
				</div>
			</div>
			{/* <div className="grow" /> */}
			<ContactIcons />
		</main>
	);
}
