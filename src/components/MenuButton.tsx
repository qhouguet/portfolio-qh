import BURGER from 'assets/BURGER.svg';
import CLOSE from 'assets/CLOSE.svg';

type Props = {
	open: boolean;
	handleClick: () => void;
};

export const MenuButton = ({ open, handleClick }: Props) => {
	console.log(open);

	return (
		<button
			onClick={handleClick}
			id={'Open'}
			className="fixed bottom-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-myGreen-dark"
		>
			<img src={open ? BURGER : CLOSE} alt={'Open / Close navigation menu'} />
		</button>
	);
};
