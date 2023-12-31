import { useOpenContext } from 'src/context/open';
import { useDataContext } from 'src/context/data';

export const Navbar = () => {
	const { handleOpen } = useOpenContext();
	const [t] = useDataContext();

	const categories = ['1', '2', '3'].map((nav) => ({
		NAME: t(`MENU.CATEGORIES.${nav}.NAME`),
		ID: t(`MENU.CATEGORIES.${nav}.ID`)
	}));

	return (
		<nav className="fixed top-0 z-40 flex h-full w-full flex-col items-center justify-center bg-myGreen-dark lg:pointer-events-auto lg:static lg:flex lg:h-auto lg:w-fit lg:flex-row lg:bg-transparent">
			<ul className="text-center lg:flex lg:flex-row">
				{categories.map((category) => (
					<li
						onClick={handleOpen}
						key={category.ID}
						className="my-16 cursor-pointer text-4xl font-extrabold uppercase text-myGreen-light hover:text-myOrange-neutral lg:my-0 lg:ml-16 lg:text-base lg:font-normal lg:italic"
					>
						<a href={`#${category.ID}`}>{category.NAME}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
