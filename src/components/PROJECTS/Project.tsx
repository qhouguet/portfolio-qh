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
		<div className="flex flex-col items-center pb-16">
			<a className="inline-block max-w-sm overflow-hidden rounded-3xl" href={PAGEURL}>
				<img
					className="scale-105 object-cover"
					src={IMAGE}
					alt={`Visuel du ${TITLE.toLowerCase()}`}
				/>
			</a>
			<div className="flex flex-col pt-4">
				<h3 className="text-center text-2xl font-bold text-myGreen-dark">{TITLE}</h3>
				<ul className="flex flex-row justify-center py-4">
					{TAGS.map((tag) => {
						return <Tag key={tag} TAG={tag} />;
					})}
				</ul>
				<a className="text-center text-2xl underline" href={URL}>
					Github
				</a>
				<p className="pt-4">{DESCRIPTION}</p>
			</div>
		</div>
	);
};
