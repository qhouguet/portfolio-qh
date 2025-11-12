import Headings from './Headings';

export const HeroBanner = () => {
	return (
		<section
			id="HOME"
			className="bg-my-green-neutral flex h-screen w-full flex-col items-center justify-center px-4 py-16 lg:px-8"
		>
			<div className="lg:max-w-screen-xl">
				<Headings />
			</div>
		</section>
	);
};
