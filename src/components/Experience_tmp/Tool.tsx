type Props = {
	NAME: string;
	URLIMAGE: string;
};

export const Tool = ({ NAME, URLIMAGE }: Props) => {
	return (
		<figure className="flex flex-col items-center pb-8 lg:w-32">
			<img alt={`Logo de ${NAME}`} className="lg:h-32" src={URLIMAGE}></img>
			<figcaption className="text-my-green-dark pt-4 font-bold uppercase lg:text-2xl lg:font-normal">
				{NAME}
			</figcaption>
		</figure>
	);
};
