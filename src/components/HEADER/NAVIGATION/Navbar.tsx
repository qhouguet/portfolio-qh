import { useOpenContext } from 'src/context/open';
import { useDataContext } from 'src/context/data';

export const Navbar = () => {
	const { open } = useOpenContext();
	const [t] = useDataContext();

	const categories = ['1', '2', '3'].map((test) => t(`MENU.CATEGORIES.${test}`));

	return (
		<nav
			className={`fixed top-0 z-40 h-full w-full flex-col items-center justify-center bg-myGreen-neutral ${
				open ? 'pointer-events-auto flex' : 'hidden'
			}`}
		>
			<ul className="text-center">
				{categories.map((category) => (
					<li
						key={category}
						className="my-16 cursor-pointer text-4xl font-extrabold uppercase text-myBlack-dark"
					>
						{category}
					</li>
				))}
			</ul>
		</nav>
	);
};
