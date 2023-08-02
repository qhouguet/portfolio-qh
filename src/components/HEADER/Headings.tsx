import { useDataContext } from 'src/context/data';

export const Headings = () => {
	const [t] = useDataContext();

	const TITLE = ['1', '2'].map((title) => t(`HEADER.TITLE.${title}`));
	const SUBTITLE = t('HEADER.SUBTITLE');
	const DESCRIPTION = ['1', '2', '3'].map((description) => t(`HEADER.INTRODUCTION.${description}`));

	return (
		<div className="relative z-10 flex flex-col items-start text-6xl text-myGreen-dark lg:items-center lg:text-9xl">
			<h1 className="pb-4 lg:text-center">
				<span className="font-regular inline-block text-xl lg:text-3xl">{TITLE[0]}</span>
				<br />
				<span className="inline-block pt-4 font-extrabold uppercase text-myBlack-dark lg:pt-8">
					{TITLE[1]}
				</span>
				<br />
				<span className="inline-block text-3xl font-bold uppercase lg:text-5xl">{SUBTITLE}</span>
			</h1>
			<p className="py-6 text-2xl lg:w-1/2 lg:text-center">
				{DESCRIPTION[0]}
				<span className="font-bold text-myBlack-dark">{DESCRIPTION[1]}</span>
				{DESCRIPTION[2]}
			</p>
		</div>
	);
};

export default Headings;
