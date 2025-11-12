import { Navbar } from './Navigation/Navbar';
import { MenuButton } from './Navigation/MenuButton';
import { useOpenContext } from 'src/context/open';
import { useDataContext } from 'src/context/data';

export const Header = () => {
	const { open, handleOpen } = useOpenContext();
	const [t] = useDataContext();
	const title = t('MENU.TITLE');

	return (
		<header className="flex justify-center">
			<div
				className={`menu lg:bg-my-green-dark pointer-events-none absolute z-20 flex h-screen w-screen flex-col items-center lg:pointer-events-auto lg:visible lg:top-0 lg:flex lg:h-14 lg:flex-row lg:justify-between lg:px-8 lg:opacity-100 ${open ? 'isOpen' : ''}`}
			>
				<h2 className="lg:fit text-my-green-light z-50 w-full py-8 text-center text-2xl font-extrabold uppercase italic lg:static lg:inline-block lg:max-w-xs lg:p-0 lg:text-left">
					<a
						className="hover:text-my-orange-neutral lg:inline-block lg:w-fit"
						onClick={handleOpen}
						href="#HOME"
					>
						{title}
					</a>
				</h2>
				<Navbar />
			</div>
			<MenuButton />
		</header>
	);
};
