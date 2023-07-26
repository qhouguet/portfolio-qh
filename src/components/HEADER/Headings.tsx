import { useDataContext } from 'src/context/data';

export const Headings = () => {
	const [t] = useDataContext();
	const title = t('HEADER.TITLE');
	const subtitle = t('HEADER.SUBTITLE');
	const description = t('HEADER.INTRODUCTION');

	return (
		<div className="relative z-10 text-center text-3xl text-myGreen-dark">
			<h1 className="uppercase">
				<span className="font-regular hidden">{title[1]}</span>
				<br />
				<span className="font-bold">{title[2]}</span>
				<br />
				<span className="inline-block pt-2 text-5xl font-extrabold text-myBlack-dark">
					{subtitle}
				</span>
			</h1>
			<p className="py-6 text-2xl">
				{description[1]}
				<span className="font-bold text-myBlack-dark">{description[2]}</span>
				{description[3]}
			</p>
		</div>
	);
};

export default Headings;
