import AVATAR from 'assets/avatar.png';

type Props = {
	title: string;
	description: string;
};

export const About = ({ title, description }: Props) => {
	return (
		<figure className="flex w-full flex-col bg-myGreen-light bg-topography px-4 py-16">
			<img src={AVATAR} className="h-72 w-72 self-center rounded-full" />
			<figcaption className="pt-10">
				<h2 className="subtitle">{title}</h2>
				<p className="pt-2 text-xl">{description}</p>
			</figcaption>
		</figure>
	);
};
