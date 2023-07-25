import { useOpenContext } from 'src/context/open';

type Props = {
	categories: string[];
};

export const Navbar = ({ categories }: Props) => {
	const { open } = useOpenContext();
	console.log(open);
	return (
		<nav
			className={`fixed top-0 z-40 h-full w-full flex-col items-center justify-center bg-myGreen-neutral ${
				open ? 'flex' : 'hidden'
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
