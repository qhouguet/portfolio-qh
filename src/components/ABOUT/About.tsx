import { useDataContext } from 'src/context/data';

export const About = () => {
	const [t] = useDataContext();
	const AVATAR = t('ABOUT.IMAGEURL');
	const TITLE = t('ABOUT.TITLE');
	const CONTENT = t('ABOUT.CONTENT');

	return (
		<figure id="ABOUT" className="flex w-full flex-col bg-myGreen-light bg-topography px-4 py-16">
			<img src={AVATAR} className="h-72 w-72 self-center rounded-full" />
			<figcaption className="pt-10">
				<h2 className="subtitle">{TITLE}</h2>
				<p className="pt-2 text-xl">{CONTENT}</p>
			</figcaption>
		</figure>
	);
};
