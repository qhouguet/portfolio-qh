import BURGER from 'assets/BURGER.svg';
import CLOSE from 'assets/CLOSE.svg';
import { useOpenContext } from 'src/context/open';

export const MenuButton = () => {
	const { open, handleOpen } = useOpenContext();

	return (
		<button
			onClick={handleOpen}
			id={'Open'}
			className="pointer-events-auto fixed bottom-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-myGreen-dark"
		>
			<img src={open ? CLOSE : BURGER} alt={'Open / Close navigation menu'} />
		</button>
	);
};
