import Image from 'next/image';
import NavBar from './NavBar';
import ContactIcons from './ContactIcons';

export default function Home() {
	return (
		<main className="h-screen bg-light-grey flex flex-col custom-bg">
			<NavBar />
			<div className="h-full flex flex-col items-center justify-center ">
				<div className="text-[7rem] font-neue-metana font-bold select-none text-dark-grey">
					Gokul Syam
				</div>
				<div className="flex gap-8 items-center p-10 rounded-3xl">
					<Image
						src="/images/headshot.jpg"
						width="250"
						height="250"
						alt="Profile picture"
						className="border border-dark-grey rounded-full select-none"
					/>
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
