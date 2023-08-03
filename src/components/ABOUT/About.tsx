import { useDataContext } from 'src/context/data';

export const About = () => {
	const [t] = useDataContext();
	const AVATAR = t('ABOUT.IMAGEURL');
	const TITLE = t('ABOUT.TITLE');
	const CONTENT = t('ABOUT.CONTENT');

	return (
		<section className="bg-myGreen-light bg-topography bg-repeat px-4 lg:px-8">
			<figure
				id="ABOUT"
				className="flex w-full flex-col py-16 lg:mx-auto lg:max-w-screen-xl lg:flex-row-reverse lg:justify-between"
			>
				<img alt="Photo de profil" src={AVATAR} className="h-72 w-72 self-center rounded-full" />
				<figcaption className="pt-10 lg:my-auto lg:pr-16 lg:pt-0">
					<h2 className="subtitle">{TITLE}</h2>
					<p className="pt-2 text-xl">{CONTENT}</p>
				</figcaption>
			</figure>
		</section>
	);
};
