import { useDataContext } from 'src/context/data';

export const Headings = () => {
	const [t] = useDataContext();

	const TITLE = ['1', '2'].map((title) => t(`HEADER.TITLE.${title}`));
	const SUBTITLE = t('HEADER.SUBTITLE');
	const DESCRIPTION = ['1', '2', '3'].map((description) => t(`HEADER.INTRODUCTION.${description}`));

	return (
		<div className="relative z-10 text-center text-3xl text-myGreen-dark">
			<h1 className="uppercase">
				<span className="font-regular hidden">{TITLE[0]}</span>
				<br />
				<span className="font-bold">{TITLE[1]}</span>
				<br />
				<span className="inline-block pt-2 text-5xl font-extrabold text-myBlack-dark">
					{SUBTITLE}
				</span>
			</h1>
			<p className="py-6 text-2xl">
				{DESCRIPTION[0]}
				<span className="font-bold text-myBlack-dark">{DESCRIPTION[1]}</span>
				{DESCRIPTION[2]}
			</p>
		</div>
	);
};

export default Headings;
