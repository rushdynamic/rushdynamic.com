import React from 'react';
import projects from '../../../data/projects.json';

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
}
const ProjectItem = ({
	title,
	year,
	image,
	description,
	tags,
}: ProjectItemProps) => {
	return (
		<div className="group h-fit w-80 min-w-80 p-6 bg-gradient-to-t from-white to-transparent flex flex-col gap-2 justify-between md:border-t border-solid border-dark-grey hover:cursor-pointer hover:w-[400px] transition-all">
			<div className="flex items-center justify-center">
				<img src={image} className="rounded-sm" />
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
					<ProjectItemTag tagName={tag} />
				))}
			</div>
		</div>
	);
};
interface ProjectItemsProps {
	projects: ProjectItemProps[];
}
const ProjectItems = ({ projects }: ProjectItemsProps) => {
	return (
		<div className="w-full flex items-start justify-center gap-2 flex-wrap">
			{projects.map((project) => (
				<ProjectItem
					title={project.title}
					year={project.year}
					image={project.image}
					description={project.description}
					tags={project.tags}
				/>
			))}
		</div>
	);
};

export default async function Projects() {
	return (
		<div className="p-8 font-montreal text-dark-grey flex flex-col gap-4">
			<div className="text-7xl font-semibold">Projects</div>
			<div className="text-xl md:text-2xl lg:text-3xl">
				Independent projects I've worked on for both learning and amusement.
				<br />
				Primarily for amusement.
			</div>
			<ProjectItems projects={projects} />
		</div>
	);
}
