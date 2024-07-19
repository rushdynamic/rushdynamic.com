'use client';
import React, { useState } from 'react';
import projects from '../data/projects.json';
import ProjectItems from './ProjectItems';
import ExpandedProjectItem from './ExpandedProjectItem';

export default function Projects() {
	const [activeProject, setActiveProject] = useState<string>('');
	console.log('activeProject:', activeProject);
	if (activeProject == '')
		return (
			<div className="p-8 font-montreal text-dark-grey flex flex-col gap-4">
				<div className="text-7xl font-semibold">Projects</div>
				<div className="text-xl md:text-2xl lg:text-3xl">
					Independent projects I've worked on for both learning and amusement.
					<br />
					Primarily for amusement.
				</div>
				<ProjectItems projects={projects} onClick={setActiveProject} />
			</div>
		);
	return <ExpandedProjectItem onClear={() => setActiveProject('')} />;
}
