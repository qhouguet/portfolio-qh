import { PropsWithChildren } from 'react';

export const HeroBanner = ({ children }: PropsWithChildren) => {
	return (
		<section className="flex h-screen w-full animate-bgFlash flex-col items-center justify-center bg-myGreen-light px-4 before:absolute before:left-0 before:top-0 before:w-1/3 before:animate-expandReverse before:bg-myGreen-neutral after:absolute after:right-0 after:top-0 after:w-1/3 after:animate-expandReverse after:bg-myGreen-neutral">
			<span className="absolute w-1/3 animate-expand bg-myGreen-neutral"></span>
			{children}
		</section>
	);
};
