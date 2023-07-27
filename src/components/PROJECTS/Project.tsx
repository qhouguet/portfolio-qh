type TAGS = {
	[key: number]: string;
};

type Props = {
	IMAGE: string;
	TITLE: string;
	TAGS: TAGS;
	URL: string;
	PAGEURL: string;
	DESCRIPTION: string;
};

export const Project = ({ IMAGE, TITLE, TAGS, URL, PAGEURL, DESCRIPTION }: Props) => {
	console.log(TAGS);
	return (
		<div className="flex flex-col pb-16">
			<a className="inline-block w-full overflow-hidden rounded-3xl" href={PAGEURL}>
				<img
					className="scale-125 object-cover"
					src={IMAGE}
					alt={`Visuel du ${TITLE.toLowerCase()}`}
				/>
			</a>
			<div className="flex flex-col pt-4">
				<h3 className="text-center text-2xl font-bold text-myGreen-dark">{TITLE}</h3>
				<ul className="py-4 text-center">TEST</ul>
				<a className="text-center text-2xl underline" href={URL}>
					Github
				</a>
				<p className="pt-4">{DESCRIPTION}</p>
			</div>
		</div>
	);
};
