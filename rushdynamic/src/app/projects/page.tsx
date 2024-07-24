import React from 'react';
import projects from '../data/projects.json';
import ProjectItems from './ProjectItems';

export default function Projects() {
	return (
		<div className="p-8 font-montreal text-dark-grey flex flex-col gap-4">
			<div className="text-7xl font-semibold">Projects</div>
			<div className="text-xl md:text-2xl lg:text-3xl">
				{"Independent projects I've worked on for both learning and amusement."}
				<br />
				{'Primarily for amusement.'}
			</div>
			<ProjectItems projects={projects} />
		</div>
	);
}
