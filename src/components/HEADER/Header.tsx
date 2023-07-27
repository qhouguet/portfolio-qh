import { Navbar } from './NAVIGATION/Navbar';
import { MenuButton } from './NAVIGATION/MenuButton';
import { useOpenContext } from 'src/context/open';
import { useDataContext } from 'src/context/data';

export const Header = () => {
	const { open, handleOpen } = useOpenContext();
	const [t] = useDataContext();
	const title = t('MENU.TITLE');

	return (
		<header className="pointer-events-none absolute z-20 flex h-screen w-screen flex-col items-center">
			<h2
				className={`pointer-events-auto z-50 w-full py-8 text-center text-2xl font-extrabold uppercase italic text-myGreen-dark ${
					open ? 'fixed' : 'hidden'
				}`}
			>
				<a onClick={handleOpen} href="#HOME">
					{title}
				</a>
			</h2>
			<Navbar />
			<MenuButton />
		</header>
	);
};
