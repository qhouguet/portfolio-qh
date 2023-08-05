import Headings from './Headings';

export const HeroBanner = () => {
	return (
		<section
			id="HOME"
			className="flex h-screen w-full flex-col items-center justify-center bg-myGreen-neutral px-4 py-16 lg:px-8"
		>
			<div className="lg:max-w-screen-xl">
				<Headings />
			</div>
		</section>
	);
};
