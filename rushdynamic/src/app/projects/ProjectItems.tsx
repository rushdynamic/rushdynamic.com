'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectItemTagProps {
	tagName: string;
}
const ProjectItemTag = ({ tagName }: ProjectItemTagProps) => {
	return (
		<div className="w-fit flex py-0.5 px-2 rounded-xl text-xs text-light-grey border border-solid bg-dark-grey border-dark-grey">
			{tagName}
		</div>
	);
};

interface ProjectItemProps {
	title: string;
	year: number;
	image: string;
	description: string;
	tags: string[];
	git: string;
}
const ProjectItem = ({
	title,
	year,
	image,
	description,
	tags,
	git,
}: ProjectItemProps) => {
	return (
		<Link href={git} passHref legacyBehavior>
			<a target="_blank" rel="noopener noreferrer">
				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
					className="group h-full w-50 min-w-50 lg:w-80 lg:min-w-80 p-6 bg-gradient-to-t from-white to-transparent flex flex-col gap-2 justify-between md:border-t border-solid border-dark-grey hover:cursor-pointer"
				>
					<div className="flex items-center justify-center max-w-[80]">
						<Image
							src={image}
							className="rounded-sm"
							alt={title}
							height={280}
							width={280}
						/>
					</div>
					<div className="flex items-center justify-between gap-1">
						<div className="text-4xl">{title}</div>
						<div className="text-sm px-2 border border-solid border-dark-grey group-hover:bg-dark-grey group-hover:text-light-grey">
							{year}
						</div>
					</div>
					<div className="text-lg">{description}</div>
					<div className="flex flex-wrap gap-1">
						{tags.map((tag) => (
							<ProjectItemTag key={tag} tagName={tag} />
						))}
					</div>
				</motion.div>
			</a>
		</Link>
	);
};

interface ProjectItemsProps {
	projects: ProjectItemProps[];
}
const ProjectItems = ({ projects }: ProjectItemsProps) => {
	return (
		<div className="w-full flex items-start justify-center gap-6 flex-wrap">
			{projects.map((project) => (
				<ProjectItem
					key={project.title}
					title={project.title}
					year={project.year}
					image={project.image}
					description={project.description}
					tags={project.tags}
					git={project.git}
				/>
			))}
		</div>
	);
};

export default ProjectItems;
