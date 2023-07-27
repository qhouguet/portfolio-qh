import { useDataContext } from 'src/context/data';
import { Project } from './Project';

export const ProjectList = () => {
	const [t] = useDataContext();

	const PROJECTLIST = ['1', '2', '3', '4'].map((project) => ({
		TITLE: t(`PROJECTS.PROJECT_LIST.${project}.TITLE`),
		TAGS: t(`PROJECTS.PROJECT_LIST.${project}.TAGS`),
		URL: t(`PROJECTS.PROJECT_LIST.${project}.URL`),
		PAGEURL: t(`PROJECTS.PROJECT_LIST.${project}.PAGEURL`),
		IMAGEURL: t(`PROJECTS.PROJECT_LIST.${project}.IMAGEURL`),
		DESCRIPTION: t(`PROJECTS.PROJECT_LIST.${project}.DESCRIPTION`)
	}));
	const TITLE = t('PROJECTS.TITLE');
	const DESCRIPTION = t('PROJECTS.DESCRIPTION');

	return (
		<section id="PROJECTS" className="px-4 pt-16">
			<h2 className="subtitle pb-2">{TITLE}</h2>
			<p className="text-xl">{DESCRIPTION}</p>
			<div className="pb-4 pt-16">
				{PROJECTLIST.map((project) => {
					return (
						<Project
							TITLE={project.TITLE}
							TAGS={project.TAGS}
							URL={project.URL}
							PAGEURL={project.PAGEURL ? project.PAGEURL : project.URL}
							IMAGE={project.IMAGEURL}
							DESCRIPTION={project.DESCRIPTION}
							key={project.TITLE}
						/>
					);
				})}
			</div>
		</section>
	);
};
