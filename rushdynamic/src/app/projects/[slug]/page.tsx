import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ClearButton from '../../components/ClearButton';
import { projects } from '@/app/data/projects';
import Link from 'next/link';

export const generateStaticParams = async () => {
	return Object.values(projects).map((project) => {
		slug: project.slug;
	});
};

interface ExpandedProjectItemProps {
	params: { slug: string };
}
async function ExpandedProjectItem({ params }: ExpandedProjectItemProps) {
	const { slug } = params;
	const project = projects[slug as keyof typeof projects];
	const readmeResp = await fetch(project.readme);
	const readmeData = await readmeResp.text();

	return (
		<div className="flex flex-col items-center">
			<div className="flex items-center gap-2">
				<div className="text-3xl">{project.title}</div>
				<Link href="/projects">
					<ClearButton />
				</Link>
			</div>
			<div className="w-[80%] bg-light-grey p-12">
				<Markdown children={readmeData} rehypePlugins={[rehypeRaw]} />
			</div>
		</div>
	);
}

export default ExpandedProjectItem;
