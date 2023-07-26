type Props = {
	NAME: string;
	URLIMAGE: string;
};

export const Tool = ({ NAME, URLIMAGE }: Props) => {
	return (
		<figure className="flex flex-col items-center pb-8">
			<img src={URLIMAGE}></img>
			<figcaption className="pt-4 font-bold uppercase text-myGreen-dark">{NAME}</figcaption>
		</figure>
	);
};
