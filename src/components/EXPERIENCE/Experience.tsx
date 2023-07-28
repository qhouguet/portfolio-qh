import { useDataContext } from 'src/context/data';
import { Tool } from './Tool';

export const Experience = () => {
	const [t] = useDataContext();
	const TOOLTITLE = t('TOOLS.KNOWN.TITLE');
	const TECHNO = ['REACT', 'MONGODB', 'NODEJS', 'ASTRO', 'TYPESCRIPT'].map((techno) => ({
		NAME: t(`TOOLS.KNOWN.TOOL_LIST.${techno}.NAME`),
		URLIMAGE: t(`TOOLS.KNOWN.TOOL_LIST.${techno}.IMAGEURL`)
	}));
	const LEARNTITLE = t('TOOLS.LEARNING.TITLE');
	const LEARNLIST = ['VUEJS', 'NESTJS', 'NEXTJS', 'POSTEGRESQL'].map((learn) =>
		t(`TOOLS.LEARNING.LEARNING_LIST.${learn}`)
	);

	return (
		<section id="SKILLS" className="bg-myGreen-neutral px-4 lg:px-8">
			<div className="flex h-full w-full flex-col items-center py-16 lg:mx-auto lg:max-w-screen-xl lg:items-start">
				<h2 className="subtitle text-center text-myBlack-dark">{TOOLTITLE}</h2>
				<div className="pt-8 lg:flex lg:w-full lg:flex-row lg:justify-between">
					{TECHNO.map((techno) => {
						return <Tool NAME={techno.NAME} URLIMAGE={techno.URLIMAGE} key={techno.NAME} />;
					})}
				</div>
				<h2 className="subtitle pb-8 pt-4 text-center text-myBlack-dark lg:pt-16">{LEARNTITLE}</h2>
				<ul className="flex flex-col items-center lg:ml-0.5 lg:w-full lg:flex-row">
					{LEARNLIST.map((tech) => {
						return (
							<li
								key={tech}
								className="pb-4 font-bold uppercase text-myGreen-dark lg:mr-32 lg:text-lg lg:font-normal"
							>
								{tech}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
