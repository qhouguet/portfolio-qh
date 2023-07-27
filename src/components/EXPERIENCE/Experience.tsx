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
		<section
			id="SKILLS"
			className="flex h-full w-full flex-col items-center bg-myGreen-neutral px-4 py-16"
		>
			<h2 className="subtitle text-center text-myBlack-dark">{TOOLTITLE}</h2>
			<div className="pt-8">
				{TECHNO.map((techno) => {
					return <Tool NAME={techno.NAME} URLIMAGE={techno.URLIMAGE} key={techno.NAME} />;
				})}
			</div>
			<h2 className="subtitle pb-8 pt-4 text-center text-myBlack-dark">{LEARNTITLE}</h2>
			<ul className="flex flex-col items-center">
				{LEARNLIST.map((tech) => {
					return (
						<li key={tech} className="pb-4 font-bold uppercase text-myGreen-dark">
							{tech}
						</li>
					);
				})}
			</ul>
		</section>
	);
};
