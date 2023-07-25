type Props = {
	title1: string;
	title2: string;
	subtitle: string;
	description: string[];
};

export const Headings = ({ title1, title2, subtitle, description }: Props) => {
	return (
		<div className="relative z-10 text-center text-3xl text-myGreen-dark">
			<h1 className="uppercase">
				<span className="font-regular hidden">{title1}</span>
				<br />
				<span className="font-bold">{title2}</span>
				<br />
				<span className="inline-block pt-2 text-5xl font-extrabold text-myBlack-dark">
					{subtitle}
				</span>
			</h1>
			<p className="py-6 text-2xl">
				{description[0]}
				<span className="font-bold text-myBlack-dark">{description[1]}</span>
				{description[2]}
			</p>
		</div>
	);
};

export default Headings;
