import { useDataContext } from 'src/context/data';
import { Project } from './Project';

export const ProjectList = () => {
	const [t] = useDataContext();

	// On créé un tableau sur lequel on va pouvoir itérer pour récupérer nos données,
	// puis on l'utilisera pour générer les projets dans le dom
	const PROJECTLIST = ['1', '2', '3', '4', '5'].map((project) => ({
		TITLE: t(`PROJECTS.PROJECT_LIST.${project}.TITLE`),
		TAGS: ['1', '2', '3'].map((tag) => t(`PROJECTS.PROJECT_LIST.${project}.TAGS.${tag}`)),
		URL: t(`PROJECTS.PROJECT_LIST.${project}.URL`),
		PAGEURL: t(`PROJECTS.PROJECT_LIST.${project}.PAGEURL`),
		IMAGEURL: t(`PROJECTS.PROJECT_LIST.${project}.IMAGEURL`),
		DESCRIPTION: t(`PROJECTS.PROJECT_LIST.${project}.DESCRIPTION`)
	}));
	const TITLE = t('PROJECTS.TITLE');
	const DESCRIPTION = t('PROJECTS.DESCRIPTION');

	return (
		<section id="PROJECTS" className="bg-myGreen-light bg-topography bg-repeat px-4 pt-16 lg:px-8">
			<div className="lg:mx-auto lg:max-w-screen-xl">
				<div className="lg:w-1/2">
					<h2 className="subtitle pb-2">{TITLE}</h2>
					<p className="text-xl">{DESCRIPTION}</p>
				</div>
				<div className="pb-4 pt-16">
					{PROJECTLIST.map((project) => {
						return (
							<Project
								TITLE={project.TITLE}
								TAGS={project.TAGS as string[]}
								URL={project.URL}
								PAGEURL={project.PAGEURL}
								IMAGE={project.IMAGEURL}
								DESCRIPTION={project.DESCRIPTION}
								key={project.TITLE}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
