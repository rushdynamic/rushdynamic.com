import Image from 'next/image';

export default function Home() {
	return (
		<main className="h-screen bg-light-grey flex flex-col custom-bg">
			<div className="h-full flex flex-col items-center justify-center gap-6">
				<div className="text-gray-950">
					<div className="text-[9rem] right-1 font-neue-metana">Gokul Syam</div>
				</div>
				<div className="flex gap-8 items-center">
					<Image
						src="/images/headshot.jpg"
						width="500"
						height="500"
						alt="Profile picture"
						className="border rounded-3xl select-none"
					/>
					<div className="max-w-[500px] font-inter text-xl">
						<p>Hi,</p>
						<p>
							I'm a full-stack engineer working out of Bangalore, India with
							over 5 years of professional experience in the industry.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
