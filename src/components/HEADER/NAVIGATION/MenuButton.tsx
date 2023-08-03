import { useOpenContext } from 'src/context/open';

export const MenuButton = () => {
	const { open, handleOpen } = useOpenContext();

	return (
		<button
			type="button"
			aria-label="Open/Close menu button"
			onClick={handleOpen}
			className="pointer-events-auto fixed bottom-8 z-50 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-myGreen-dark lg:hidden"
		>
			<div
				className={`burger-container flex h-full w-full items-center justify-center ${
					open ? 'isOpen' : 'isClosed'
				}`}
			>
				<span className="bun-top bun"></span>
				<span className="bun-bot bun"></span>
			</div>
		</button>
	);
};
