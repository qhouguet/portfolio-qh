import { Tag } from './Tag';

type Props = {
	IMAGE: string;
	TITLE: string;
	TAGS: string[];
	URL: string;
	PAGEURL: string;
	DESCRIPTION: string;
};

export const Project = ({ IMAGE, TITLE, TAGS, URL, PAGEURL, DESCRIPTION }: Props) => {
	return (
		<div className="project-list-desktop flex flex-col items-center pb-16 lg:flex lg:flex-row lg:items-start lg:justify-between">
			<a className="TEST inline-block max-w-sm overflow-hidden rounded-xl" href={PAGEURL}>
				<img
					className="scale-105 object-cover"
					src={IMAGE}
					alt={`Visuel du ${TITLE.toLowerCase()}`}
				/>
			</a>
			<div className="flex flex-col pt-4 lg:h-full lg:w-4/6 lg:items-start lg:pl-8 lg:pt-0">
				<h3 className="text-center text-2xl font-bold text-myGreen-dark">{TITLE}</h3>
				<ul className="flex flex-row justify-center py-4 lg:justify-start">
					{TAGS.map((tag) => {
						return <Tag key={tag} TAG={tag} />;
					})}
				</ul>
				<a
					className="transform text-center text-2xl underline transition duration-100 hover:scale-110 hover:text-myOrange-neutral"
					href={URL}
				>
					Github
				</a>
				<p className="pt-4">{DESCRIPTION}</p>
			</div>
		</div>
	);
};
