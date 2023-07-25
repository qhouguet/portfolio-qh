type Tool = {
	name: string;
	imageUrl: string;
};

type Props = {
	title1: string;
	toolList: Tool[];
	title2: string;
	learnList: string[];
};

export const Experience = ({ title1, toolList, title2, learnList }: Props) => {
	return (
		<section className="flex h-full w-full flex-col items-center bg-myGreen-neutral px-4 py-16">
			<h2 className="subtitle text-center text-myBlack-dark">{title1}</h2>
			<div className="pt-8">
				{toolList.map((tool) => {
					return (
						<figure className="flex flex-col items-center pb-8">
							<img src={tool.imageUrl}></img>
							<figcaption className="pt-4 font-bold uppercase text-myGreen-dark">
								{tool.name}
							</figcaption>
						</figure>
					);
				})}
			</div>
			<h2 className="subtitle pb-8 pt-4 text-center text-myBlack-dark">{title2}</h2>
			<ul className="flex flex-col items-center">
				{learnList.map((tech) => {
					return <li className="pb-4 font-bold uppercase text-myGreen-dark">{tech}</li>;
				})}
			</ul>
		</section>
	);
};
